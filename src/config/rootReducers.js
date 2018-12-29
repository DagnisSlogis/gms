import { combineReducers } from "redux";

// Reducers
import posts from "../features/posts/modules/posts";
import postsPage from "../features/posts/modules/postsPage";
import post from "../features/post/modules/post";

export default combineReducers({
  posts,
  post,
  postsPage,
});
