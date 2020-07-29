import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addLikeExplore,
  addSavedExplore,
  deleteLikeExplore,
  deleteSavedExplore,
  postModal,
} from "../../redux/actionCreators";
import { baseUrl } from "../../shared/baseUrl";
import Comments from "../post/comments";
const About = (props) => {
  if (props.about !== "") return <div className="about-box">{props.about}</div>;
  else return <div></div>;
};

const Info = (props) => {
  return (
    <div>
      <img
        src={
          props.postStats.likes.includes(props.liker)
            ? "icons/liked.svg"
            : "icons/like.svg"
        }
        alt="likes"
        height={30}
        width={30}
        onClick={() => {
          if (props.postStats.likes.includes(props.liker))
            props.deleteLikeExplore({
              postId: props.post.id,
              category: props.active,
              liker: props.liker,
            });
          else
            props.addLikeExplore({
              postId: props.post.id,
              category: props.active,
              liker: props.liker,
            });
        }}
      />
      {props.postStats.likes.length}
      <img src="icons/comment.svg" alt="likes" width={30} height={30} />
      {props.comments}
      <img
        src="icons/alert.svg"
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
            ? props.deleteSavedExplore({
                postId: props.post.id,
                profileId: props.liker,
              })
            : props.addSavedExplore({
                postId: props.post.id,
                profileId: props.liker,
              });
        }}
      />
    </div>
  );
};
const Post = (props) => {
  if (props.post === undefined) return <div></div>;
  else
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
                <img
                  src={
                    props.postStats.likes.includes(props.liker)
                      ? "icons/liked.svg"
                      : "icons/like.svg"
                  }
                  width={25}
                  height={25}
                  alt="Like"
                  onClick={() => {
                    if (props.postStats.likes.includes(props.liker))
                      props.deleteLikeExplore({
                        postId: props.post.id,
                        category: props.active,
                        liker: props.liker,
                      });
                    else
                      props.addLikeExplore({
                        postId: props.post.id,
                        category: props.active,
                        liker: props.liker,
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
              post={props.post}
              postStats={props.postStats}
              comments={0}
              active={props.active}
              liker={props.liker}
              addLikeExplore={props.addLikeExplore}
              deleteLikeExplore={props.deleteLikeExplore}
              isSaved={
                props.explorePosts.filter(
                  (p) =>
                    p.id === props.post.id && p.savedBy.includes(props.liker) //liker= current logged in profile
                ).length > 0
              }
              addSavedExplore={props.addSavedExplore}
              deleteSavedExplore={props.deleteSavedExplore}
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
};
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
      onClick={() => props.postModal(post)}
    />
  ));
};
class View extends Component {
  render() {
    return (
      <>
        <div className="row">
          <PostGrid
            posts={this.props.explorePosts.filter(
              (post) => post.category === this.props.active
            )}
            postModal={this.props.postModal}
            data-toggle="modal"
            data-target="#postModal"
          />
        </div>
        <Post
          post={this.props.post}
          postStats={
            this.props.post === undefined
              ? { like: [] }
              : this.props.explorePosts.filter(
                  (post) => post.id === this.props.post.id
                )[0]
          }
          isClicked={this.props.isPostClicked}
          active={this.props.active}
          liker={this.props.loggedInProfile.id}
          addLikeExplore={this.props.addLikeExplore}
          deleteLikeExplore={this.props.deleteLikeExplore}
          explorePosts={this.props.explorePosts}
          addSavedExplore={this.props.addSavedExplore}
          deleteSavedExplore={this.props.deleteSavedExplore}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  explorePosts: state.explore,
  post: state.utility.postModal,
  loggedInProfile: state.utility.loggedInProfile,
});

const mapDispatchToProps = (dispatch) => ({
  postModal: (post) => dispatch(postModal(post)),
  addLikeExplore: (post) => dispatch(addLikeExplore(post)),
  deleteLikeExplore: (post) => dispatch(deleteLikeExplore(post)),
  addSavedExplore: (post) => dispatch(addSavedExplore(post)),
  deleteSavedExplore: (post) => dispatch(deleteSavedExplore(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
