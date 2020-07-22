import React, { Component } from "react";
import { COMMENTS } from "../../shared/comments";

const CommentList = (props) => {
  return (
    <div>
      {props.comments.map((comment) => (
        <div className="row">
          <div className="col-lg-2 col-1">
            <img
              src={comment.author.avatar}
              alt={comment.author.name}
              className="rounded-circle"
              width={40}
              height={40}
            />
          </div>
          <div className="col-lg-10 col small">
            <a
              className="unstyled text-dark font-weight-bold mr-1"
              href={comment.author.link}
            >
              {comment.author.name}
            </a>
            {comment.text}
          </div>
          {comment.replies.map((reply) => (
            <div className="lg-offset-2 offset-1 row">
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
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: COMMENTS,
    };
  }
  render() {
    return (
      <div
        className={`${
          this.props.isAboutEmpty ? "comment-box-no-about" : "comment-box"
        }`}
      >
        <CommentList
          postId={this.props.postId}
          comments={this.state.comments.filter(
            (comment) => comment.postId === this.props.postId
          )}
        />
      </div>
    );
  }
}
export default Comments;
