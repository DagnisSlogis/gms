import { combineReducers } from "redux";

// Reducers
import posts from "../features/posts/redux/postsReducer";
import post from "../features/post/redux/postReducer";
import postLoading from "../features/post/redux/postLoadingReducer";

export default combineReducers({
  posts,
  post,
  postLoading
});
