import { POSTS } from "../shared/posts";
import * as ActionTypes from "./actionTypes";

export const Posts = (state = POSTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_POST:
      return state;
    case ActionTypes.DELETE_POST:
      return state;
    case ActionTypes.ADD_LIKE:
      return state;
    case ActionTypes.DELETE_LIKE:
      return state;
    default:
      return state;
  }
};
