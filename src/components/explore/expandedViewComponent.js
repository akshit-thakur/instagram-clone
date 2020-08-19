import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addLikeExplore,
  addSavedExplore,
  deleteLikeExplore,
  deleteSavedExplore,
} from "../../redux/actionCreators";
import { SideComponent } from "../post/sideComponent";

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
        <SideComponent
          activeTab={props.activeTab}
          post={post}
          comments={props.allComments.filter(
            (comment) => comment.postId === post.id
          )}
          addLike={props.addLike}
          deleteLike={props.deleteLike}
          addSaved={props.addSaved}
          deleteSaved={props.deleteSaved}
          loggedInProfile={props.liker}
          isSaved={
            props.posts.filter(
              (p) => p.id === post.id && p.savedBy.includes(props.liker.id) //liker= current logged in profile
            ).length > 0
          }
          about={post.about}
        />
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
            allComments={this.props.comments}
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
  comments: state.comments,
  loggedInProfile: state.utility.loggedInProfile,
});

const mapDispatchToProps = (dispatch) => ({
  addLikeExplore: (post) => dispatch(addLikeExplore(post)),
  deleteLikeExplore: (post) => dispatch(deleteLikeExplore(post)),
  addSavedExplore: (post) => dispatch(addSavedExplore(post)),
  deleteSavedExplore: (post) => dispatch(deleteSavedExplore(post)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ExpandedView);
