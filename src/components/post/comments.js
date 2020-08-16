import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  addLikeComment,
  addLikeReply,
  addReply,
  deleteLikeComment,
  deleteLikeReply,
  isReplyTo,
} from "../../redux/actionCreators";

const CommentList = (props) => {
  return (
    <>
      {props.comments.map((comment) => (
        <div className="row wordwrap ">
          <div className="col-lg-2 col-1">
            <img
              src={comment.author.avatar}
              alt={comment.author.name}
              className="rounded-circle"
              width={40}
              height={40}
            />
          </div>
          <div className="col small">
            <a
              className="unstyled text-dark font-weight-bold mr-1"
              href={comment.author.link}
            >
              {comment.author.name}
            </a>
            {comment.text}

            <div className="font-weight-bold text-secondary">
              <img
                src={`${
                  comment.likes.includes(props.loggedInProfile.id)
                    ? "icons/liked.svg"
                    : "icons/like.svg"
                }`}
                alt="likes"
                width={15}
                className="m-auto"
                onClick={() => {
                  if (comment.likes.includes(props.loggedInProfile.id))
                    props.deleteLikeComment({
                      commentId: comment.id,
                      liker: props.loggedInProfile.id,
                    });
                  else
                    props.addLikeComment({
                      commentId: comment.id,
                      liker: props.loggedInProfile.id,
                    });
                }}
              />
              {comment.likes.length} {comment.replies.length} replies|
              <span
                onClick={() => {
                  console.log(props.postId);
                  document
                    .querySelector(`#commentInput${props.postId}`)
                    .focus();
                  props.isReplyTo({ commentId: comment.id });
                }}
              >
                Reply
              </span>
            </div>
          </div>

          {comment.replies.map((reply) => (
            <div className="offset-1 row wordwrap ">
              <div className="col-lg-2 col-1">
                <img
                  src={reply.author.avatar}
                  alt={reply.author.name}
                  className="rounded-circle"
                  width={30}
                  height={30}
                />
              </div>
              <div className="col-10 small">
                <a
                  className="unstyled text-dark font-weight-bold mr-1"
                  href={reply.author.link}
                >
                  {reply.author.name}
                </a>
                {reply.text}
                <div className="font-weight-bold text-secondary inline">
                  <img
                    src={`${
                      reply.likes.includes(props.loggedInProfile.id)
                        ? "icons/liked.svg"
                        : "icons/like.svg"
                    }`}
                    alt="likes"
                    width={15}
                    className="m-auto"
                    onClick={() => {
                      if (reply.likes.includes(props.loggedInProfile.id))
                        props.deleteLikeReply({
                          replyId: reply.id,
                          commentId: comment.id,
                          liker: props.loggedInProfile.id,
                        });
                      else
                        props.addLikeReply({
                          replyId: reply.id,
                          commentId: comment.id,
                          liker: props.loggedInProfile.id,
                        });
                    }}
                  />
                  {reply.likes.length}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

class Comments extends Component {
  render() {
    return (
      <div
        className={`${
          this.props.isAboutEmpty ? "comment-box-no-about" : "comment-box"
        }`}
      >
        <CommentList
          postId={this.props.postId}
          comments={this.props.comments.filter(
            (comment) => comment.postId === this.props.postId
          )}
          loggedInProfile={this.props.loggedInProfile}
          addLikeComment={this.props.addLikeComment}
          deleteLikeComment={this.props.deleteLikeComment}
          addLikeReply={this.props.addLikeReply}
          deleteLikeReply={this.props.deleteLikeReply}
          addReply={this.props.addReply}
          isReplyTo={this.props.isReplyTo}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments,
  loggedInProfile: state.utility.loggedInProfile,
  replyTo: state.utility.replyTo,
});

const mapDispatchToProps = (dispatch) => ({
  addLikeComment: (info) => dispatch(addLikeComment(info)),
  deleteLikeComment: (info) => dispatch(deleteLikeComment(info)),
  isReplyTo: (info) => dispatch(isReplyTo(info)),
  addReply: (info) => dispatch(addReply(info)),
  addLikeReply: (info) => dispatch(addLikeReply(info)),
  deleteLikeReply: (info) => dispatch(deleteLikeReply(info)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Comments)
);
