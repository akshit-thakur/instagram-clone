import { SAVED } from "../shared/saved";
import * as ActionTypes from "./actionTypes";

export const Saved = (state = SAVED, action) => {
  switch (action.type) {
    case ActionTypes.ADD_SAVED:
      let index = -1;
      let count = -1;
      const findPost = (saved) => {
        count += 1;
        if (saved.postId === action.payload.postId) {
          index = count;
          return true;
        }
      };
      const postToModify = state.filter(findPost)[0];
      console.log(postToModify);
      if (postToModify === undefined) {
        state.push({
          postId: action.payload.postId,
          profileId: [action.payload.profileId],
        });
        return [...state];
      } else {
        state[index].profileId.push(action.payload.profileId);
        return [...state];
      }
    case ActionTypes.DELETE_SAVED:
      let indexToDeleteAt = -1;
      let countToDeleteAt = -1;
      const findPostToModify = (saved) => {
        countToDeleteAt += 1;
        if (saved.postId === action.payload.postId) {
          indexToDeleteAt = countToDeleteAt;
          return true;
        }
      };
      const post = state.filter(findPostToModify)[0];
      if (post === undefined) return [...state];
      else {
        const indexOfProfile = state[indexToDeleteAt].profileId.indexOf(
          action.payload.profileId
        );
        if (indexOfProfile === -1) return [...state];
        else {
          state[indexToDeleteAt].profileId.splice(indexOfProfile, 1);
          return [...state];
        }
      }
    default:
      return state;
  }
};
