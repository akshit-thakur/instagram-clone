import React from "react";
import { baseUrl } from "../../shared/baseUrl";
import Comments from "./comments";

const About = (props) => {
  if (props.about !== "")
    return (
      <>
        <div className="about-box">{props.about}</div>
        <hr />
      </>
    );
  else return <div></div>;
};
const SavedIcon = (props) => {
  if (props.loggedId === props.posterId) return <div></div>;
  else {
    const objToPass = {
      postId: props.postId,
      profileId: props.loggedId,
    };
    return (
      <img
        src={
          props.isSaved //check if saved
            ? "icons/saved.svg"
            : "icons/save.svg"
        }
        alt="save"
        width={40}
        height={40}
        className="offset-1"
        onClick={() => {
          props.isSaved
            ? props.deleteSaved(objToPass)
            : props.addSaved(objToPass);
        }}
      />
    );
  }
};

const ReportIcon = ({ post, loggedInProfile }) => {
  if (post.profile.id !== loggedInProfile.id) {
    return (
      <>
        <img
          src="icons/alert.svg"
          alt="report here"
          height={20}
          width={20}
          className="offset-5 dropdown-toggle caret-off"
          data-toggle="dropdown"
        />
        <div className="dropdown-menu">
          <a className="dropdown-item" type="button" href={`${baseUrl}`}>
            Report
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" type="button" href={`${baseUrl}`}>
            Block
          </a>
        </div>
      </>
    );
  } else return <></>;
};
const Info = (props) => {
  let numberOfReactions = props.comments.length;
  props.comments.forEach((comment) => {
    numberOfReactions += comment.replies.length;
  });
  return (
    <div>
      <img
        src={
          props.post.likes.includes(props.loggedInProfile.id)
            ? "icons/liked.svg"
            : "icons/like.svg"
        }
        alt="likes"
        height={20}
        width={20}
        onClick={() => {
          if (props.post.likes.includes(props.loggedInProfile.id))
            props.deleteLike({
              postId: props.post.id,
              liker: props.loggedInProfile.id,
            });
          else
            props.addLike({
              postId: props.post.id,
              liker: props.loggedInProfile.id,
            });
        }}
        className="mx-1"
      />
      {props.likes}
      <img
        src="icons/comment.svg"
        alt="likes"
        width={20}
        height={20}
        onClick={() =>
          document.querySelector(`#commentInput${props.post.id}`).focus()
        }
        className="mx-1"
      />
      {numberOfReactions}
      <ReportIcon post={props.post} loggedInProfile={props.loggedInProfile} />

      <SavedIcon
        loggedId={props.loggedInProfile.id}
        isSaved={props.isSaved}
        posterId={props.post.profile.id}
        postId={props.post.id}
        addSaved={props.addSaved}
        deleteSaved={props.deleteSaved}
      />
      {/*save icon*/}
    </div>
  );
};

export const SideComponent = (props) => {
  return (
    <>
      <Info
        post={props.post}
        likes={props.post.likes.length}
        comments={props.comments}
        addLike={props.addLike}
        deleteLike={props.deleteLike}
        loggedInProfile={props.loggedInProfile}
        isSaved={props.isSaved}
        addSaved={props.addSaved}
        deleteSaved={props.deleteSaved}
      />
      <hr />
      <About about={props.post.about} />
      <Comments isAboutEmpty={props.post.about === ""} postId={props.post.id} />
    </>
  );
};
