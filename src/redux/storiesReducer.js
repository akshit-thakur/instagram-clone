import { STORIES } from "../shared/stories";
import * as ActionTypes from "./actionTypes";

export const Stories = (state = STORIES, action) => {
  switch (action.type) {
    case ActionTypes.ADD_STORY:
      return state;
    case ActionTypes.DELETE_STORY:
      return state;
    case ActionTypes.ADD_VIEW:
      const indexToAddAt = state.findIndex(
        (story) => story.id === action.payload.id
      );
      state[indexToAddAt] = {
        ...state[indexToAddAt],
        views: state[indexToAddAt].views.includes(action.payload.viewer)
          ? state[indexToAddAt].views
          : state[indexToAddAt].views.concat(action.payload.viewer),
      };
      return [...state];
    default:
      return state;
  }
};
