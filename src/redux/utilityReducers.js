import * as ActionTypes from "./actionTypes";
export const Utility = (
  state = {
    activeChat: undefined,
    activeTabExplore: "ownPosts",
    activeTabProfile: "posts",
    isExploreExpanded: false,
    isInfoClicked: false,
    isNavigationModalTriggered: false,
    isPostClicked: false,
    isSearchBoxVisible: false,
    isTop: true, //for homepage
    loggedInProfile: {
      id: "1",
      name: "ABC",
      avatar: `profile/1.jpg`,
      link: "localhost:3000/profile/1.html",
      isPublic: true,
      about:
        "Phasellus lacus justo, sodales sed maximus et, condimentum et neque. Quisque sed purus vel quam ullamcorper luctus. Nunc vel augue sapien. Suspendisse dignissim ipsum quis nunc vestibulum venenatis. Mauris non diam et mauris fringilla hendrerit. Proin id porta lectus. Curabitur vel porta eros. Sed suscipit malesuada tellus, id fringilla libero porttitor id. Proin imperdiet orci eget felis commodo, eu fermentum nibh elementum. Aenean sagittis nibh a risus imperdiet interdum. Suspendisse eget leo et metus consequat tempor sed nec eros. ",
      extra: {
        location: "Atlantis",
        email: "dummy@business.com",
        social: "Facebook",
        mentioned: "other account",
      },
    },
    postModal: undefined,
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
        isPostClicked: true, //giving problem
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
    case ActionTypes.TOGGLE_NAVIGATION:
      return { ...state, isNavigationModalTriggered: true };
    case ActionTypes.TOGGLE_SEARCH:
      return { ...state, isSearchBoxVisible: !state.isSearchBoxVisible };
    default:
      return state;
  }
};
