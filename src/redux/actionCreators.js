import * as ActionTypes from "./actionTypes";

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

export const addFollower = (profileInfo) => ({
  type: ActionTypes.ADD_FOLLOWER,
  payload: profileInfo,
});

export const addIGTV = (igtvInfo) => ({
  type: ActionTypes.ADD_IGTV,
  payload: igtvInfo,
});

export const addLike = (postInfo) => ({
  type: ActionTypes.ADD_LIKE,
  payload: postInfo,
});

export const addMessage = (messageInfo) => ({
  type: ActionTypes.ADD_MESSAGE,
  payload: messageInfo,
});

export const addPost = (postInfo) => ({
  type: ActionTypes.ADD_POST,
  payload: postInfo,
});

export const addReply = (replyInfo) => ({
  type: ActionTypes.ADD_REPLY,
  payload: replyInfo,
});

export const addSaved = (savedInfo) => ({
  type: ActionTypes.ADD_SAVED,
  payload: savedInfo,
});

export const addStory = (storyInfo) => ({
  type: ActionTypes.ADD_STORY,
  payload: storyInfo,
});

export const addTagged = (taggedInfo) => ({
  type: ActionTypes.ADD_TAGGED,
  payload: taggedInfo,
});

export const addView = (viewInfo) => ({
  type: ActionTypes.ADD_VIEW,
  payload: viewInfo,
});

export const deleteComment = (comment) => ({
  type: ActionTypes.DELETE_COMMENT,
  payload: comment,
});

export const deleteFollower = (profileInfo) => ({
  type: ActionTypes.DELETE_FOLLOWER,
  payload: profileInfo,
});

export const deleteIGTV = (igtvInfo) => ({
  type: ActionTypes.DELETE_IGTV,
  payload: igtvInfo,
});

export const deleteLike = (postInfo) => ({
  type: ActionTypes.DELETE_LIKE,
  payload: postInfo,
});

export const deleteMessage = (messageInfo) => ({
  type: ActionTypes.DELETE_MESSAGE,
  payload: messageInfo,
});

export const deletePost = (postInfo) => ({
  type: ActionTypes.DELETE_POST,
  payload: postInfo,
});

export const deleteReply = (replyInfo) => ({
  type: ActionTypes.DELETE_REPLY,
  payload: replyInfo,
});

export const deleteSaved = (savedInfo) => ({
  type: ActionTypes.DELETE_SAVED,
  payload: savedInfo,
});

export const deleteStory = (storyInfo) => ({
  type: ActionTypes.DELETE_STORY,
  payload: storyInfo,
});

export const deleteTagged = (taggedInfo) => ({
  type: ActionTypes.DELETE_TAGGED,
  payload: taggedInfo,
});

export const isTopToggle = (isTop) => ({
  type: ActionTypes.TOGGLE_TOP,
  payload: isTop,
});

export const setActiveTabExplore = (newTab) => ({
  type: ActionTypes.SET_ACTIVE_TAB_EXPLORE,
  payload: newTab,
});

export const postModal = (post) => ({
  type: ActionTypes.TOGGLE_POST_MODAL,
  payload: post,
});

export const toggleExploreView = (isExploreExpanded) => ({
  type: ActionTypes.TOGGLE_EXPLORE_VIEW,
  payload: isExploreExpanded,
});

export const setActiveTabProfile = (newTab) => ({
  type: ActionTypes.SET_ACTIVE_TAB_PROFILE,
  payload: newTab,
});

export const selectStory = (story) => ({
  type: ActionTypes.SELECT_STORY,
  payload: story,
});

export const toggleInfoClicked = () => ({
  type: ActionTypes.TOGGLE_MESSAGE_INFO,
});

export const activateChat = (message) => ({
  type: ActionTypes.SHOW_CHAT,
  payload: message,
});

export const addLikeExplore = (postInfo) => ({
  type: ActionTypes.ADD_LIKE_EXPLORE,
  payload: postInfo,
});

export const deleteLikeExplore = (postInfo) => ({
  type: ActionTypes.DELETE_LIKE_EXPLORE,
  payload: postInfo,
});

export const toggleSearchBox = () => ({
  type: ActionTypes.TOGGLE_SEARCH,
});

export const addSavedExplore = (postInfo) => ({
  type: ActionTypes.ADD_SAVED_EXPLORE,
  payload: postInfo,
});

export const deleteSavedExplore = (postInfo) => ({
  type: ActionTypes.DELETE_SAVED_EXPLORE,
  payload: postInfo,
});

export const setActiveProfile = (profile) => ({
  type: ActionTypes.SET_ACTIVE_PROFILE,
  payload: profile,
});
