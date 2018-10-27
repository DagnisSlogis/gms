import { combineReducers } from "redux";

// Reducers
import posts from "../features/posts/modules/posts";
import post from "../features/post/modules/post";
import postsPage from '../features/posts/modules/postsPage';

export default combineReducers({
  posts,
  post,
  postsPage,
});
