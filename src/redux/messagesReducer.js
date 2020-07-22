import { MESSAGES } from "../shared/messages";
import * as ActionTypes from "./actionTypes";

export const Messages = (state = MESSAGES, action) => {
  switch (action.type) {
    case ActionTypes.ADD_MESSAGE:
      return state;
    case ActionTypes.DELETE_MESSAGE:
      return state;
    default:
      return state;
  }
};
