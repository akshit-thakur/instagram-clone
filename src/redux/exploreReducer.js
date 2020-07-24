import { EXPLORE } from "../shared/explore";
import * as ActionTypes from "./actionTypes";
export const Explore = (state = EXPLORE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_LIKE_EXPLORE:
      let indexToAddAt = state.findIndex(
        (post) => post.id === action.payload.postId
      );
      state[indexToAddAt] = {
        ...state[indexToAddAt],
        likes: state[indexToAddAt].likes.concat(action.payload.liker),
      };
      return [...state];
    case ActionTypes.DELETE_LIKE_EXPLORE:
      const indexToDeleteAt = state.findIndex(
        (post) => post.id === action.payload.postId
      );
      state[indexToDeleteAt] = {
        ...state[indexToDeleteAt],
        likes: state[indexToDeleteAt].likes.filter(
          (liker) => liker !== action.payload.liker
        ),
      };
      return [...state];
    default:
      return state;
  }
};
