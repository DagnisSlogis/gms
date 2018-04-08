// @flow
import * as types from "./postActionTypes";
import initialState from "../../../common/initialState";

export default function postsReducer(
  state: Array<Object> = initialState.posts,
  action: Object
): Array<Object> {
  switch (action.type) {
    case types.POSTS_FETCH_SUCCESS:
      return [...state, ...action.payload];

    case types.POSTS_FETCH:
    case types.POSTS_FETCH_ERROR:
    default:
      return state;
  }
}
