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
        width={50}
        height={50}
        className="ml-5"
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
          height={25}
          width={25}
          className="ml-5 dropdown-toggle caret-off"
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
        height={30}
        width={30}
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
      />
      {props.likes}
      <img
        src="icons/comment.svg"
        alt="likes"
        width={30}
        height={30}
        onClick={() =>
          document.querySelector(`#commentInput${props.post.id}`).focus()
        }
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

      <div className="mt-auto mb-1">
        <hr />
        <div className="row">
          <input
            id={`commentInput${props.post.id}`}
            type="text"
            style={{
              border: "none",
            }}
            className="form-control col-8 ml-auto"
            placeholder="Add a comment..."
          />
          <button
            type="submit"
            className="mx-auto btn bg-white text-primary"
            onClick={() => {
              if (props.replyTo)
                props.addReply({
                  commentId: props.replyTo,
                  author: props.loggedInProfile,
                  text: document.querySelector(`#commentInput${props.post.id}`)
                    .value,
                  likes: [],
                });
              else
                props.addComment({
                  postId: props.post.id,
                  author: props.loggedInProfile,
                  text: document.querySelector(`#commentInput${props.post.id}`)
                    .value,
                  likes: [],
                  replies: [],
                });
              props.isReplyTo({});
            }}
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
};
