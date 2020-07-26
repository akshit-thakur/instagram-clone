import React, { Component } from "react";
import Comments from "../post/comments";
import { baseUrl } from "../../shared/baseUrl";
import { connect } from "react-redux";
import {
  postModal,
  addLike,
  deleteLike,
  addSaved,
  deleteSaved,
} from "../../redux/actionCreators";
const About = (props) => {
  if (props.about !== "") {
    return <div className="about-box">{props.about}</div>;
  } else return <div></div>;
};

const Info = (props) => {
  return (
    <div>
      <img
        src="icons/like.svg"
        alt="likes"
        height={30}
        width={30}
        onClick={() => {
          if (props.likes.includes(props.liker))
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
      {props.likes.length}
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
        src={`${props.isSaved ? "icons/savedFill.svg" : "icons/save.svg"}`}
        alt="save"
        width={`${props.isSaved ? 100 : 50}`}
        height={`${props.isSaved ? 100 : 50}`}
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
                <img
                  src="icons/like.svg"
                  width={25}
                  height={25}
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
              likes={props.postLikes}
              comments={props.post.comments}
              post={props.post}
              liker={props.liker}
              addLike={props.addLike}
              deleteLike={props.deleteLike}
              isSaved={props.isSaved}
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
  } else return <div></div>;
};
class FeedGallery extends Component {
  render() {
    const PostGrid = (props) => {
      return props.posts.map((post) => (
        <img
          key={post.id}
          src={post.image}
          width={400}
          height={400}
          alt="post"
          role="button"
          className="col-4 mb-5"
          data-toggle="modal"
          data-target="#postModal"
          onClick={() => this.props.postModal(post)}
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
        <Post
          post={this.props.modalPost}
          postLikes={
            this.props.modalPost === undefined
              ? 0
              : this.props.postOriginal.filter(
                  (post) => post.id === this.props.modalPost.id
                )[0].likes
          }
          postComments={0}
          addLike={this.props.addLike}
          deleteLike={this.props.deleteLike}
          isClicked={this.props.isPostClicked}
          isSaved={
            this.props.modalPost === undefined
              ? false
              : this.props.saved.filter(
                  (post) =>
                    post.profile.id === this.props.loggedInProfile.id &&
                    post.image === this.props.modalPost.image
                ).length !== 0
          }
          liker={this.props.loggedInProfile.id}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  postOriginal: state.posts,
  saved: state.saved,
  isPostClicked: state.utility.isPostClicked,
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
