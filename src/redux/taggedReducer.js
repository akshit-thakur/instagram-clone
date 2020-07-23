import { TAGGED } from "../shared/tagged";
import * as ActionTypes from "./actionTypes";
export const Tagged = (state = TAGGED, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TAGGED:
      return state;
    case ActionTypes.DELETE_TAGGED:
      return state;
    default:
      return state;
  }
};
