import { ACCOUNT } from "../shared/account";
import * as ActionTypes from "./actionTypes";
export const Accounts = (state = ACCOUNT, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FOLLOWER:
      return state;
    case ActionTypes.DELETE_FOLLOWER:
      return state;
    case ActionTypes.ADD_FOLLOW_REQUEST:
      const indexToAddAt = state.findIndex(
        (person) => person.id === action.payload.person
      );
      state[indexToAddAt] = {
        ...state[indexToAddAt],
        pendingRequests: state[indexToAddAt].pendingRequests.concat(
          action.payload.requester
        ),
      };
      return [...state];
    case ActionTypes.DELETE_FOLLOW_REQUEST:
      const indexToDeleteAt = state.findIndex(
        (person) => person.id === action.payload.person
      );
      state[indexToDeleteAt] = {
        ...state[indexToDeleteAt],
        pendingRequests: state[indexToDeleteAt].pendingRequests.filter(
          (req) => req !== action.payload.requester
        ),
      };
      return [...state];
    default:
      return state;
  }
};
