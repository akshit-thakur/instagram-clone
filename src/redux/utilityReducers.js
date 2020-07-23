import * as ActionTypes from "./actionTypes";
export const Utility = (
  state = {
    activeChat: undefined,
    activeTabExplore: "ownPosts",
    activeTabProfile: "post",
    isExploreExpanded: false,
    isInfoClicked: false,
    isPostClicked: false,
    isTop: true, //for homepage
    loggedInProfile: {
      id: "1",
      name: "ABC",
      avatar: `profile/1.jpg`,
      link: "localhost:3000/profile/1.html",
      isPublic: true,
    },
    postModal: {},
    selectedStory: undefined,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_TOP:
      return { ...state, isTop: !state.isTop };
    case ActionTypes.SET_ACTIVE_TAB_EXPLORE:
      return { ...state, activeTabExplore: action.payload };
    case ActionTypes.TOGGLE_POST_MODAL:
      return {
        ...state,
        isPostClicked: !state.isPostClicked, //might give problem
        postModal: action.payload,
      };
    case ActionTypes.TOGGLE_EXPLORE_VIEW:
      return {
        ...state,
        isExploreExpanded: action.payload,
      };
    case ActionTypes.SET_ACTIVE_TAB_PROFILE:
      return {
        ...state,
        activeTabProfile: action.payload,
      };
    case ActionTypes.SELECT_STORY:
      return {
        ...state,
        selectedStory: action.payload,
      };
    case ActionTypes.SHOW_CHAT:
      return { ...state, activeChat: action.payload };
    case ActionTypes.TOGGLE_MESSAGE_INFO:
      return { ...state, isInfoClicked: !state.isInfoClicked };
    default:
      return state;
  }
};
