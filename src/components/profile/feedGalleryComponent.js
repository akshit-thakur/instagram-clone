import React, { Component } from "react";
import Comments from "../post/comments";
import { baseUrl } from "../../shared/baseUrl";

const About = (props) => {
  if (props.about !== "") {
    return <div className="about-box">{props.about}</div>;
  } else return <div></div>;
};

const Info = (props) => {
  return (
    <div className="">
      <img src="icons/like.png" alt="likes" height={30} width={30} />
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
      <div class="dropdown-menu">
        <a class="dropdown-item" type="button" href={`${baseUrl}`}>
          Report
        </a>
        <div className="dropdown-divider"></div>
        <a class="dropdown-item" type="button" href={`${baseUrl}`}>
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
const Post = (props) => {
  if (props.isClicked) {
    return (
      <div id="postModal" className="modal modal-align" role="dialog">
        <div className="container row ">
          <div className="col-8 modal-content">
            <div className="row p-2">
              <div className="col-2">
                <img
                  src={props.post.profile.avatar}
                  width={50}
                  height={50}
                  alt={props.post.profile.name}
                  className="rounded-circle"
                />
              </div>
              <div className="col-4">
                <div className="row h6">{props.post.profile.name}</div>
                <div className="row small">{props.post.location}</div>
              </div>
              <div className="offset-4 col">
                <img src="icons/like.png" width={25} height={25} alt="Like" />
                <img
                  src="icons/comment.png"
                  width={25}
                  height={25}
                  alt="Comment"
                />
                <img
                  src="icons/messages.png"
                  width={25}
                  height={25}
                  alt="Share"
                />
              </div>
            </div>
            <div className="row">
              <img
                src={props.post.image}
                alt="post"
                className="post-img-modal offset-1"
              />
            </div>
          </div>
          <div className="col card">
            <div class="row offset-11">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <Info
              likes={props.post.likes.length}
              comments={props.post.comments}
            />

            <hr />
            <About about={props.post.about} />
            <hr />
            <Comments
              isAboutEmpty={props.post.about === ""}
              postId={props.post.id}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

class FeedGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      post: {},
    };
  }
  render() {
    const PostGrid = (props) => {
      return props.posts.map((post) => (
        <img
          src={post.image}
          width={400}
          height={400}
          alt="post"
          role="button"
          className="col-4 mb-5"
          data-toggle="modal"
          data-target="#postModal"
          onClick={() => this.setState({ isClicked: true, post: post })}
        />
      ));
    };

    const Bottom = (props) => {
      return (
        <div className="col-lg-10 offset-lg-1 row">
          <PostGrid posts={props.posts} />
        </div>
      );
    };

    return (
      <>
        <Bottom posts={this.props.posts} />
        <Post post={this.state.post} isClicked={this.state.isClicked} />
      </>
    );
  }
}
export default FeedGallery;
