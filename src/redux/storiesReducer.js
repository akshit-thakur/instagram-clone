import { STORIES } from "../shared/stories";
import * as ActionTypes from "./actionTypes";

export const Stories = (state = STORIES, action) => {
  switch (action.type) {
    case ActionTypes.ADD_STORY:
      return state;
    case ActionTypes.DELETE_STORY:
      return state;
    case ActionTypes.ADD_VIEW:
      return state;
    default:
      return state;
  }
};
