import { FOLLOWERS } from "../shared/followers";
import * as ActionTypes from "./actionTypes";

export const Followers = (state = { followers: FOLLOWERS }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FOLLOWER:
      return state;
    case ActionTypes.DELETE_FOLLOWER:
      return state;
    default:
      return state;
  }
};
