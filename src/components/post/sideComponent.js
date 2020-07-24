import React from "react";
import { baseUrl } from "../../shared/baseUrl";
import Comments from "./comments";

const About = (props) => {
  if (props.about !== "") {
    return <div className="about-box">{props.about}</div>;
  } else return <div></div>;
};

const Info = (props) => {
  return (
    <div>
      <img
        src="icons/like.png"
        alt="likes"
        height={30}
        width={30}
        onClick={() => {
          if (props.post.likes.includes(props.liker))
            props.deleteLike({
              postId: props.post.id,
              liker: props.liker,
            });
          else
            props.addLike({
              postId: props.post.id,
              liker: props.liker,
            });
        }}
      />
      {props.likes}
      <img src="icons/comment.png" alt="likes" width={30} height={30} />
      {props.comments}
      <img
        src="icons/alert.png"
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
      <img
        src="icons/save.png"
        alt="save"
        width={50}
        height={50}
        className="ml-5"
      />
    </div>
  );
};
export const SideComponent = (props) => {
  return (
    <>
      <Info
        post={props.post}
        likes={props.post.likes.length}
        comments={props.numberOfComments}
        addLike={props.addLike}
        deleteLike={props.deleteLike}
        liker={props.liker}
      />
      <hr />
      <About about={props.post.about} />
      <hr />
      <Comments isAboutEmpty={props.post.about === ""} postId={props.post.id} />
    </>
  );
};
