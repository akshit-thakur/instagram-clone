import React, { Component } from "react";
import POSTS from "../../shared/posts";
import SideComponent from "./sideComponent";

const PostList = (props) => {
  if (props.isTop) {
    //if top,sort according to top
  } else {
    //if recent,sort according to top
  }
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
        <img src={post.image} alt="post" className="post-img" />
      </div>
      <div className="col card">
        <SideComponent post={post} />
      </div>
    </div>
  ));
};
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: POSTS,
      isTop: true,
    };
  }
  render() {
    return (
      <div>
        <div id="main">
          <ul className="nav nav-tabs flex-row">
            <button
              id="topPosts"
              className="nav-link h3 active disabled"
              onClick={() => {
                this.setState({ isTop: !this.state.isTop });
                document
                  .querySelector("#recentPosts")
                  .classList.remove("active", "disabled", "text-dark");
                document
                  .querySelector("#recentPosts")
                  .classList.add("text-secondary");
                document
                  .querySelector("#topPosts")
                  .classList.add("active", "disabled", "text-dark");
                document
                  .querySelector("#topPosts")
                  .classList.remove("text-secondary");
              }}
            >
              Top
            </button>
            <button
              id="recentPosts"
              className="nav-link h3 text-secondary"
              onClick={() => {
                this.setState({ isTop: !this.state.isTop });
                document
                  .querySelector("#topPosts")
                  .classList.remove("active", "disabled", "text-dark");
                document
                  .querySelector("#topPosts")
                  .classList.add("text-secondary");
                document
                  .querySelector("#recentPosts")
                  .classList.add("active", "disabled", "text-dark");
                document
                  .querySelector("#recentPosts")
                  .classList.remove("text-secondary");
              }}
            >
              Recent
            </button>
          </ul>
        </div>
        <PostList posts={this.state.posts} isTop={this.state.isTop} />
      </div>
    );
  }
}

export default Posts;