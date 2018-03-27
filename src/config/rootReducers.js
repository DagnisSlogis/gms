import { combineReducers } from "redux";

// Reducers
import posts from "../features/posts/redux/postsReducer";
import post from "../features/post/redux/postReducer";

export default combineReducers({
  posts,
  post
});
