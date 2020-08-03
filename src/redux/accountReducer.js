import { ACCOUNT } from "../shared/account";
import * as ActionTypes from "./actionTypes";
export const Accounts = (state = ACCOUNT, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FOLLOWER:
      const indexToAddFollowerAt = state.findIndex(
        (person) => person.id === action.payload.profileId
      );
      const indexToAddFollowingAt = state.findIndex(
        (person) => person.id === action.payload.follower
      );
      state[indexToAddFollowerAt] = {
        ...state[indexToAddFollowerAt],
        followers: state[indexToAddFollowerAt].followers.concat(
          action.payload.follower
        ),
      };
      state[indexToAddFollowingAt] = {
        ...state[indexToAddFollowingAt],
        following: state[indexToAddFollowingAt].following.concat(
          action.payload.profileId
        ),
      };
      return [...state];
    case ActionTypes.DELETE_FOLLOWER:
      const indexToRemoveFollowerAt = state.findIndex(
        (person) => person.id === action.payload.profileId
      );
      const indexToRemoveFollowingAt = state.findIndex(
        (person) => person.id === action.payload.idToRemove
      );
      state[indexToRemoveFollowerAt] = {
        ...state[indexToRemoveFollowerAt],
        followers: state[indexToRemoveFollowerAt].followers.filter(
          (id) => id !== action.payload.idToRemove
        ),
      };
      state[indexToRemoveFollowingAt] = {
        ...state[indexToRemoveFollowingAt],
        following: state[indexToRemoveFollowingAt].following.filter(
          (id) => id !== action.payload.profileId
        ),
      };
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
      return [...state];
  }
};
