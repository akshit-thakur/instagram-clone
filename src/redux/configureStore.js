import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Account } from "./accountReducer";
import { Comments } from "./commentsReducer";
import { Explore } from "./exploreReducer";
import { Followers } from "./followersReducer";
import { Messages } from "./messagesReducer";
import { Posts } from "./postsReducer";
import { Saved } from "./savedReducer";
import { Stories } from "./storiesReducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      account: Account,
      comments: Comments,
      explore: Explore,
      followers: Followers,
      messages: Messages,
      posts: Posts,
      saved: Saved,
      stories: Stories,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
