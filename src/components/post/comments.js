/* eslint-disable jsx-a11y/anchor-is-valid */
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
  addComment,
} from "../../redux/actionCreators";

const ReplyListToggle = ({ comment }) => {
  if (comment.replies.length > 0)
    return (
      <div className="font-weight-bold text-secondary small">
        <a
          id={`reply-list-enable${comment.id}`}
          data-toggle="collapse"
          data-target={`#replyDiv${comment.id}`}
          className={`offset-1 `}
          onClick={() => {
            document.querySelector(
              `#reply-list-enable${comment.id}`
            ).innerHTML =
              document.querySelector(`#reply-list-enable${comment.id}`)
                .innerHTML === "Hide All Replies"
                ? `View All Replies(${comment.replies.length})`
                : "Hide All Replies";
          }}
        >
          View all replies({comment.replies.length})
        </a>
      </div>
    );
  else return <></>;
};

const CommentList = (props) => {
  return (
    <>
      {props.comments.map((comment) => (
        <>
          <div className="row p-2">
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
                {comment.likes.length}
                <a
                  onClick={() => {
                    console.log(props.postId);
                    document
                      .querySelector(`#commentInput${props.postId}`)
                      .focus();
                    props.isReplyTo({ commentId: comment.id });
                  }}
                  className="ml-2"
                >
                  Reply
                </a>
              </div>
            </div>
          </div>
          <ReplyListToggle comment={comment} />
          <div id={`replyDiv${comment.id}`} class="collapse">
            {comment.replies.map((reply) => (
              <div className="offset-1 row p-2">
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
        </>
      ))}
    </>
  );
};

class Comments extends Component {
  render() {
    return (
      <>
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
        <div className="mt-auto mb-1">
          <hr />
          <div className="row">
            <input
              id={`commentInput${this.props.postId}`}
              type="text"
              style={{
                border: "none",
              }}
              className="form-control col-8 ml-auto"
              placeholder="Add a comment..."
            />
            <button
              type="submit"
              className="mx-auto btn bg-white text-primary"
              onClick={() => {
                if (this.props.replyTo)
                  this.props.addReply({
                    commentId: this.props.replyTo,
                    author: this.props.loggedInProfile,
                    text: document.querySelector(
                      `#commentInput${this.props.postId}`
                    ).value,
                    likes: [],
                  });
                else
                  this.props.addComment({
                    postId: this.props.postId,
                    author: this.props.loggedInProfile,
                    text: document.querySelector(
                      `#commentInput${this.props.postId}`
                    ).value,
                    likes: [],
                    replies: [],
                  });
                this.props.isReplyTo({});
              }}
            >
              Post
            </button>
          </div>
        </div>
      </>
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
  addComment: (info) => dispatch(addComment(info)),
  isReplyTo: (info) => dispatch(isReplyTo(info)),
  addReply: (info) => dispatch(addReply(info)),
  addLikeReply: (info) => dispatch(addLikeReply(info)),
  deleteLikeReply: (info) => dispatch(deleteLikeReply(info)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Comments)
);
