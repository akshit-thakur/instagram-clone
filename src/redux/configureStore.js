import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Accounts } from "./accountReducer";
import { Comments } from "./commentsReducer";
import { Explore } from "./exploreReducer";
import { Messages } from "./messagesReducer";
import { Posts } from "./postsReducer";
import { Stories } from "./storiesReducer";
import { Utility } from "./utilityReducers";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      accounts: Accounts,
      comments: Comments,
      explore: Explore,
      messages: Messages,
      posts: Posts,
      utility: Utility,
      stories: Stories,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
