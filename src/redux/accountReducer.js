import { ACCOUNT } from "../shared/account";
import * as ActionTypes from "./actionTypes";
export const Accounts = (state = ACCOUNT, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FOLLOWER:
      return state;
    case ActionTypes.DELETE_FOLLOWER:
      return state;
    default:
      return state;
  }
};
