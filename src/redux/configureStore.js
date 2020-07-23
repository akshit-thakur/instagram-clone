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
import { Igtv } from "./igtvReducer";
import { Tagged } from "./taggedReducer";
import { Utility } from "./utilityReducers";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      account: Account,
      comments: Comments,
      explore: Explore,
      followers: Followers,
      igtv: Igtv,
      messages: Messages,
      posts: Posts,
      saved: Saved,
      utility: Utility,
      stories: Stories,
      tagged: Tagged,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
