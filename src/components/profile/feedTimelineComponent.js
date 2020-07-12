import React, { Component } from "react";
import Comments from "../post/comments";

const About = (props) => {
  if (props.about !== "") {
    return <div className="about-box">{props.about}</div>;
  } else return <div></div>;
};

const Info = (props) => {
  return (
    <div>
      <img src="icons/like.png" alt="likes" height={30} width={30} />
      {props.likes}
      <img src="icons/comment.png" alt="likes" width={30} height={30} />
      {props.comments}
      <img
        src="icons/alert.png"
        alt="report here"
        height={25}
        width={25}
        className="ml-4"
      />
      <img
        src="icons/save.png"
        alt="report here"
        width={50}
        height={50}
        className="ml-2"
      />
    </div>
  );
};
const PostList = (props) => {
  return props.posts.map((post) => (
    <div className="row shadow-lg mt-5">
      <div className="col-8">
        <div className="row p-2">
          <div className="col-2">
            <img
              src={post.profile.avatar}
              width={50}
              height={50}
              alt={post.profile.name}
              className="rounded-circle"
            />
          </div>
          <div className="col-4">
            <div className="row h6">{post.profile.name}</div>
            <div className="row small">{post.location}</div>
          </div>
          <div className="col offset-3">
            <img src="icons/like.png" width={25} height={25} alt="Like" />
            <img src="icons/comment.png" width={25} height={25} alt="Comment" />
            <img src="icons/messages.png" width={25} height={25} alt="Share" />
          </div>
        </div>
        <img src={post.image} alt="post" className="post-img-expanded" />
      </div>
      <div className="col card">
        <Info likes={post.likes} comments={post.comments} />
        <hr />
        <About about={post.about} />
        <hr />
        <Comments isAboutEmpty={post.about === ""} postId={post.id} />
      </div>
    </div>
  ));
};

class FeedTimeline extends Component {
  render() {
    return (
      <div className="col-lg-6 offset-lg-3">
        <PostList
          posts={this.props.posts.filter(
            (post) => post.profile.id === this.props.profile.id
          )}
        />
      </div>
    );
  }
}

export default FeedTimeline;
