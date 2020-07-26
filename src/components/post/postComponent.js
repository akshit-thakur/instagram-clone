import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileView from "../profile/profileViewComponent";
import { SideComponent } from "./sideComponent";
import { withRouter } from "react-router-dom";
import { isTopToggle, addLike, deleteLike } from "../../redux/actionCreators";

class Posts extends Component {
  render() {
    const PostList = () => {
      console.log(this.props.posts);
      if (this.props.isTop) {
        this.props.posts.sort(
          (post1, post2) =>
            parseInt(post2.likes.length) - parseInt(post1.likes.length)
        );
      } else {
        this.props.posts.sort(
          (post1, post2) =>
            parseFloat(post1.timeSincePosted) -
            parseFloat(post2.timeSincePosted)
        );
      }
      return this.props.posts.map((post) => (
        <div className="row shadow-lg mt-5">
          <div className="col-8">
            <div className="row p-2" onClick={() => <ProfileView />}>
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
                <img
                  src="icons/like.svg"
                  width={25}
                  height={25}
                  alt="Like"
                  onClick={() => {
                    if (post.likes.includes(this.props.loggedInProfile.id))
                      this.props.deleteLike({
                        postId: post.id,
                        liker: this.props.loggedInProfile.id,
                      });
                    else
                      this.props.addLike({
                        postId: post.id,
                        liker: this.props.loggedInProfile.id,
                      });
                  }}
                />
                <img
                  src="icons/comment.svg"
                  width={25}
                  height={25}
                  alt="Comment"
                />
                <img
                  src="icons/messages.svg"
                  width={25}
                  height={25}
                  alt="Share"
                />
              </div>
            </div>
            <img src={post.image} alt="post" className="post-img" />
          </div>
          <div className="col card">
            <SideComponent
              post={post}
              numberOfComments={
                this.props.comments.filter(
                  (comment) => comment.postId === post.id
                ).length
              }
              addLike={this.props.addLike}
              deleteLike={this.props.deleteLike}
              liker={this.props.loggedInProfile.id}
            />
          </div>
        </div>
      ));
    };

    return (
      <>
        <div id="main">
          <ul className="nav nav-tabs flex-row">
            <button
              id="topPosts"
              className="nav-link h3 active disabled"
              onClick={() => {
                this.props.isTopToggle(this.props.isTop);
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
                this.props.isTopToggle(this.props.isTop);
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
        <PostList />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
  comments: state.comments,
  loggedInProfile: state.utility.loggedInProfile,
  isTop: state.utility.isTop,
});

const mapDispatchToProps = (dispatch) => ({
  isTopToggle: (isTop) => dispatch(isTopToggle(isTop)),
  addLike: (post) => dispatch(addLike(post)),
  deleteLike: (post) => dispatch(deleteLike(post)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts));
