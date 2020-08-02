import * as ActionTypes from "./actionTypes";
import { COMMENTS } from "../shared/comments";
export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      const id = (state.length + 1).toString();
      const newComment = { id: id, ...action.payload };
      state = state.concat(newComment);
      return [...state];
    case ActionTypes.DELETE_COMMENT:
      return [...state];
    case ActionTypes.ADD_LIKE_COMMENT:
      const indexToAddAt = state.findIndex(
        (comment) => comment.id === action.payload.commentId
      );
      state[indexToAddAt] = {
        ...state[indexToAddAt],
        likes: state[indexToAddAt].likes.concat(action.payload.liker),
      };
      return [...state];
    case ActionTypes.DELETE_LIKE_COMMENT:
      const indexToDeleteAt = state.findIndex(
        (comment) => comment.id === action.payload.commentId
      );
      state[indexToDeleteAt] = {
        ...state[indexToDeleteAt],
        likes: state[indexToDeleteAt].likes.filter(
          (liker) => liker !== action.payload.liker
        ),
      };
      return [...state];
    case ActionTypes.ADD_REPLY:
      const indexToAddReplyAt = state.findIndex(
        (comment) => comment.id === action.payload.commentId
      );
      const newReplyId = state[indexToAddReplyAt].replies.length + 1;
      const newReply = {
        id: newReplyId,
        commentId: action.payload.commentId,
        author: action.payload.author,
        text: action.payload.text,
        likes: [],
      };
      state[indexToAddReplyAt] = {
        ...state[indexToAddReplyAt],
        replies: state[indexToAddReplyAt].replies.concat(newReply),
      };
      return [...state];
    case ActionTypes.DELETE_REPLY:
      return [...state];
    case ActionTypes.ADD_LIKE_REPLY:
      const commentIndex = state.findIndex(
        (comment) => comment.id === action.payload.commentId
      ); //finds the index of comment to add the like to
      const replyIndex = state[commentIndex].replies.findIndex(
        (reply) => reply.id === action.payload.replyId
      ); //finds the index of reply to add the like to
      state[commentIndex].replies[replyIndex] = {
        ...state[commentIndex].replies[replyIndex],
        likes: state[commentIndex].replies[replyIndex].likes.concat(
          action.payload.liker
        ),
      };
      return [...state];

    case ActionTypes.DELETE_LIKE_REPLY:
      const commentInd = state.findIndex(
        (comment) => comment.id === action.payload.commentId
      );
      const replyInd = state[commentInd].replies.findIndex(
        (reply) => reply.id === action.payload.replyId
      );
      state[commentInd].replies[replyInd] = {
        ...state[commentInd].replies[replyInd],
        likes: state[commentInd].replies[replyInd].likes.filter(
          (liker) => liker !== action.payload.liker
        ),
      };
      return [...state];
    default:
      return state;
  }
};
