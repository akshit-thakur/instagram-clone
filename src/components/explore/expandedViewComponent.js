import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addLikeExplore,
  deleteLikeExplore,
  addSavedExplore,
  deleteSavedExplore,
} from "../../redux/actionCreators";
import { baseUrl } from "../../shared/baseUrl";
import Comments from "../post/comments";
const About = (props) => {
  if (props.about !== "") return <div className="about-box">{props.about}</div>;
  else return <div></div>;
};

const Info = (props) => {
  let numberOfReactions = props.comments.length;
  props.post.comments.forEach((comment) => {
    numberOfReactions += comment.replies.length;
  });
  return (
    <div>
      <img
        src={
          props.post.likes.includes(props.liker)
            ? "icons/liked.svg"
            : "icons/like.svg"
        }
        alt="likes"
        height={20}
        width={20}
        onClick={() => {
          if (props.post.likes.includes(props.liker))
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
      {props.post.likes.length}
      <img src="icons/comment.svg" alt="likes" height={20} width={20} />
      {numberOfReactions}
      <img
        src="icons/alert.svg"
        alt="report here"
        height={20}
        width={20}
        className="offset-5 dropdown-toggle caret-off"
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
        alt="saved"
        width={40}
        height={40}
        className="offset-1"
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
            <img
              src={
                post.likes.includes(props.liker)
                  ? "icons/liked.svg"
                  : "icons/like.svg"
              }
              width={20}
              height={20}
              alt="Like"
              onClick={() => {
                if (post.likes.includes(props.liker))
                  props.deleteLikeExplore({
                    postId: post.id,
                    liker: props.liker,
                  });
                else
                  props.addLikeExplore({
                    postId: post.id,
                    liker: props.liker,
                  });
              }}
              className="mx-1"
            />
            <img
              src="icons/comment.svg"
              width={20}
              height={20}
              alt="Comment"
              className="mx-1"
            />
            <img
              src="icons/messages.svg"
              width={20}
              height={20}
              alt="Share"
              className="mx-1"
            />
          </div>
          {post.timeSincePosted}h
        </div>
        <img src={post.image} alt="post" className="post-img-expanded" />
      </div>
      <div className="col card">
        <Info
          post={post}
          comments={0}
          addLikeExplore={props.addLikeExplore}
          deleteLikeExplore={props.deleteLikeExplore}
          liker={props.liker}
          isSaved={
            props.posts.filter(
              (p) => p.id === post.id && p.savedBy.includes(props.liker) //liker= current logged in profile
            ).length > 0
          }
          addSavedExplore={props.addSavedExplore}
          deleteSavedExplore={props.deleteSavedExplore}
        />
        <hr />
        <About about={post.about} />
        <hr />
        <Comments isAboutEmpty={post.about === ""} postId={post.id} />
      </div>
    </div>
  ));
};
class ExpandedView extends Component {
  render() {
    return (
      <>
        <div className="col-lg-10 offset-lg-1">
          <PostList
            posts={this.props.explorePosts.filter(
              (post) => post.category === this.props.active
            )}
            addLikeExplore={this.props.addLikeExplore}
            deleteLikeExplore={this.props.deleteLikeExplore}
            liker={this.props.loggedInProfile.id}
            addSavedExplore={this.props.addSavedExplore}
            deleteSavedExplore={this.props.deleteSavedExplore}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  explorePosts: state.explore,
  loggedInProfile: state.utility.loggedInProfile,
});

const mapDispatchToProps = (dispatch) => ({
  addLikeExplore: (post) => dispatch(addLikeExplore(post)),
  deleteLikeExplore: (post) => dispatch(deleteLikeExplore(post)),
  addSavedExplore: (post) => dispatch(addSavedExplore(post)),
  deleteSavedExplore: (post) => dispatch(deleteSavedExplore(post)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ExpandedView);
