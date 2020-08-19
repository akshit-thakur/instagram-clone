import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addLike,
  addSaved,
  deleteLike,
  deleteSaved,
  postModal,
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
                post.likes.includes(props.liker.id)
                  ? "icons/liked.svg"
                  : "icons/like.svg"
              }
              width={20}
              height={20}
              alt="Like"
              onClick={() => {
                if (post.likes.includes(props.liker.id))
                  props.deleteLike({
                    postId: post.id,
                    liker: props.liker.id,
                  });
                else
                  props.addLike({
                    postId: post.id,
                    liker: props.liker.id,
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
class FeedTimeline extends Component {
  render() {
    return (
      <div className="col-lg-8 offset-lg-2">
        <PostList
          activeTab={this.props.activeState}
          posts={this.props.posts}
          allComments={this.props.comments}
          liker={this.props.loggedInProfile}
          addLike={this.props.addLike}
          deleteLike={this.props.deleteLike}
          addSaved={this.props.addSaved}
          deleteSaved={this.props.deleteSaved}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  loggedInProfile: state.utility.loggedInProfile,
  comments: state.comments,
});

const mapDispatchToProps = (dispatch) => ({
  postModal: (post) => dispatch(postModal(post)),
  addLike: (post) => dispatch(addLike(post)),
  deleteLike: (post) => dispatch(deleteLike(post)),
  addSaved: (post) => dispatch(addSaved(post)),
  deleteSaved: (post) => dispatch(deleteSaved(post)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FeedTimeline);
