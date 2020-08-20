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
const Post = (props) => {
  if (props.post === undefined) return <div></div>;
  else
    return (
      <div id="postModal" className="modal modal-post" role="dialog">
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
              <div className="offset-3 col">
                <img
                  src={
                    props.postLikes.includes(props.liker)
                      ? "icons/liked.svg"
                      : "icons/like.svg"
                  }
                  width={20}
                  height={20}
                  alt="Like"
                  onClick={() => {
                    if (props.postLikes.includes(props.liker))
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
              {props.post.timeSincePosted}h
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
            <SideComponent
              activeTab={props.activeTab}
              likes={props.postLikes}
              post={props.post}
              comments={props.allComments.filter(
                (comment) => comment.postId === props.post.id
              )}
              loggedInProfile={props.liker}
              addLike={props.addLike}
              deleteLike={props.deleteLike}
              isSaved={props.isSaved}
              addSaved={props.addSaved}
              deleteSaved={props.deleteSaved}
            />
          </div>
        </div>
      </div>
    );
};
class FeedGallery extends Component {
  render() {
    const PostGrid = (props) => {
      return props.posts.map((post) => (
        <>
          <img
            key={post.id}
            src={post.image}
            width={400}
            height={400}
            alt="post"
            role="button"
            className="image col-4 mb-5"
            data-toggle="modal"
            data-target="#postModal"
            onClick={() => this.props.postModal(post)}
          />
          {/* <div className="middle">
            <img src="icons/like.svg" alt="likes" />
            {post.likes.length}
          </div> */}
        </>
      ));
    };

    return (
      <>
        <div className="col-lg-10 offset-lg-1 row">
          <PostGrid posts={this.props.posts} />
        </div>
        <Post
          post={this.props.modalPost}
          postLikes={
            this.props.modalPost === undefined
              ? []
              : this.props.postOriginal.filter(
                  (post) => post.id === this.props.modalPost.id
                )[0].likes
          }
          allComments={this.props.comments}
          addLike={this.props.addLike}
          deleteLike={this.props.deleteLike}
          isSaved={
            this.props.modalPost === undefined
              ? false
              : this.props.posts.filter(
                  (post) =>
                    post.savedBy.includes(this.props.loggedInProfile.id) &&
                    post.id === this.props.modalPost.id
                ).length !== 0
          }
          liker={this.props.loggedInProfile}
          addSaved={this.props.addSaved}
          deleteSaved={this.props.deleteSaved}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  postOriginal: state.posts,
  comments: state.comments,
  saved: state.saved,
  modalPost: state.utility.postModal,
  loggedInProfile: state.utility.loggedInProfile,
});

const mapDispatchToProps = (dispatch) => ({
  postModal: (post) => dispatch(postModal(post)),
  addLike: (post) => dispatch(addLike(post)),
  deleteLike: (post) => dispatch(deleteLike(post)),
  addSaved: (post) => dispatch(addSaved(post)),
  deleteSaved: (post) => dispatch(deleteSaved(post)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FeedGallery);
