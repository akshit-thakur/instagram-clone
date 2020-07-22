import { SAVED } from "../shared/saved";
import * as ActionTypes from "./actionTypes";

export const Saved = (state = SAVED, action) => {
  switch (action.type) {
    case ActionTypes.ADD_SAVED:
      return state;
    case ActionTypes.DELETE_SAVED:
      return state;
    default:
      return state;
  }
};
