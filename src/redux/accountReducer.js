import { ACCOUNT } from "../shared/account";
import * as ActionTypes from "./actionTypes";
export const Accounts = (state = ACCOUNT, action) => {
  switch (action.type) {
    case ActionTypes.ADD_REPORT:
      return state;
    case ActionTypes.DELETE_REPORT:
      return state;
    case ActionTypes.ADD_BLOCK:
      return state;
    case ActionTypes.DELETE_BLOCK:
      return state;
    default:
      return state;
  }
};