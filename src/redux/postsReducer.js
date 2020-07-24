import { POSTS } from "../shared/posts";
import * as ActionTypes from "./actionTypes";

export const Posts = (state = POSTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_POST:
      return state;
    case ActionTypes.DELETE_POST:
      return state;
    case ActionTypes.ADD_LIKE:
      const indexToAddAt = state.findIndex(
        (post) => post.id === action.payload.postId
      );
      state[indexToAddAt] = {
        ...state[indexToAddAt],
        likes: state[indexToAddAt].likes.concat(action.payload.liker),
      };
      return [...state];

    case ActionTypes.DELETE_LIKE:
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
