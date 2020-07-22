import * as ActionTypes from "./actionTypes";
import { COMMENTS } from "../shared/comments";
export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      return state;
    case ActionTypes.DELETE_COMMENT:
      return state;
    case ActionTypes.ADD_REPLY:
      return state;
    case ActionTypes.DELETE_REPLY:
      return state;
    default:
      return state;
  }
};
