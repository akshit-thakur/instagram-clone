import * as ActionTypes from "./actionTypes";

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

export const addFollower = (profileInfo) => ({
  type: ActionTypes.ADD_FOLLOWER,
  payload: profileInfo,
});

export const addLike = (profileInfo) => ({
  type: ActionTypes.ADD_LIKE,
  payload: profileInfo,
});

export const addBlock = (profileInfo) => ({
  type: ActionTypes.ADD_BLOCK,
  payload: profileInfo,
});

export const addPost = (postInfo) => ({
  type: ActionTypes.ADD_POST,
  payload: postInfo,
});

export const addMessage = (messageInfo) => ({
  type: ActionTypes.ADD_MESSAGE,
  payload: messageInfo,
});

export const addReply = (replyInfo) => ({
  type: ActionTypes.ADD_REPLY,
  payload: replyInfo,
});

export const addView = (viewInfo) => ({
  type: ActionTypes.ADD_VIEW,
  payload: viewInfo,
});

export const addReport = (reportInfo) => ({
  type: ActionTypes.ADD_REPORT,
  payload: reportInfo,
});

export const addStory = (storyInfo) => ({
  type: ActionTypes.ADD_STORY,
  payload: storyInfo,
});

export const deleteComment = (comment) => ({
  type: ActionTypes.DELETE_COMMENT,
  payload: comment,
});

export const deleteFollower = (profileInfo) => ({
  type: ActionTypes.DELETE_FOLLOWER,
  payload: profileInfo,
});

export const deleteLike = (profileInfo) => ({
  type: ActionTypes.DELETE_LIKE,
  payload: profileInfo,
});

export const deleteBlock = (profileInfo) => ({
  type: ActionTypes.DELETE_BLOCK,
  payload: profileInfo,
});

export const deletePost = (postInfo) => ({
  type: ActionTypes.DELETE_POST,
  payload: postInfo,
});

export const deleteMessage = (messageInfo) => ({
  type: ActionTypes.DELETE_MESSAGE,
  payload: messageInfo,
});

export const deleteReply = (replyInfo) => ({
  type: ActionTypes.DELETE_REPLY,
  payload: replyInfo,
});

export const deleteReport = (reportInfo) => ({
  type: ActionTypes.DELETE_REPORT,
  payload: reportInfo,
});

export const deleteStory = (storyInfo) => ({
  type: ActionTypes.DELETE_STORY,
  payload: storyInfo,
});
