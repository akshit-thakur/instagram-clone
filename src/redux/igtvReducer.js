import { IGTV } from "../shared/igtv";
import * as ActionTypes from "./actionTypes";
export const Igtv = (state = IGTV, action) => {
  switch (action.type) {
    case ActionTypes.ADD_IGTV:
      return state;
    case ActionTypes.DELETE_IGTV:
      return state;
    default:
      return state;
  }
};
