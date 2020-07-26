import React, { Component } from "react";
import Comments from "../post/comments";
import { baseUrl } from "../../shared/baseUrl";
import {
  postModal,
  addLike,
  deleteLike,
  addSaved,
  deleteSaved,
} from "../../redux/actionCreators";
import { connect } from "react-redux";

const About = (props) => {
  if (props.about !== "") return <div className="about-box">{props.about}</div>;
  else return <div></div>;
};
const DecideToDisplay = (props) => {
  //saved icon
  if (props.loggedId === props.posterId) return <div></div>;
  else {
    const objToPass = {
      postId: props.postId,
      profileId: props.loggedId,
    };
    return (
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
        onClick={() =>
          props.isSaved
            ? props.deleteSaved(objToPass)
            : props.addSaved(objToPass)
        }
      />
    );
  }
};
const Info = (props) => {
  return (
    <div>
      <img
        src={
          props.post.likes.includes(props.liker)
            ? "icons/liked.svg"
            : "icons/like.svg"
        }
        alt="likes"
        height={30}
        width={30}
        onClick={() => {
          if (props.post.likes.includes(props.liker))
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
      {props.likes}
      <img src="icons/comment.svg" alt="comments" width={30} height={30} />
      {props.comments}
      <img
        src="icons/alert.svg"
        alt="report here"
        height={25}
        width={25}
        className="ml-4 dropdown-toggle caret-off"
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
      <DecideToDisplay
        loggedId={props.liker}
        isSaved={props.isSaved}
        posterId={props.post.profile.id}
        postId={props.post.id}
        addSaved={props.addSaved}
        deleteSaved={props.deleteSaved}
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
              width={25}
              height={25}
              alt="Like"
              onClick={() => {
                if (post.likes.includes(props.liker))
                  props.deleteLike({
                    postId: post.id,
                    liker: props.liker,
                  });
                else
                  props.addLike({
                    postId: post.id,
                    liker: props.liker,
                  });
              }}
            />
            <img src="icons/comment.svg" width={25} height={25} alt="Comment" />
            <img src="icons/messages.svg" width={25} height={25} alt="Share" />
          </div>
        </div>
        <img src={post.image} alt="post" className="post-img-expanded" />
      </div>
      <div className="col card">
        <Info
          likes={post.likes.length}
          comments={0}
          post={post}
          addLike={props.addLike}
          deleteLike={props.deleteLike}
          addSaved={props.addSaved}
          deleteSaved={props.deleteSaved}
          liker={props.liker}
          isSaved={
            props.saved.filter(
              (save) =>
                save.postId === post.id && save.profileId.includes(props.liker) //liker= current logged in profile
            ).length > 0
          }
        />
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
      <div className="col-lg-8 offset-lg-2">
        <PostList
          posts={this.props.posts}
          addLike={this.props.addLike}
          deleteLike={this.props.deleteLike}
          addSaved={this.props.addSaved}
          deleteSaved={this.props.deleteSaved}
          liker={this.props.loggedInProfile.id}
          saved={this.props.saved}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  posts: state.posts,
  saved: state.saved,
  loggedInProfile: state.utility.loggedInProfile,
});

const mapDispatchToProps = (dispatch) => ({
  postModal: (post) => dispatch(postModal(post)),
  addLike: (post) => dispatch(addLike(post)),
  deleteLike: (post) => dispatch(deleteLike(post)),
  addSaved: (post) => dispatch(addSaved(post)),
  deleteSaved: (post) => dispatch(deleteSaved(post)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FeedTimeline);
