// @flow
import * as types from "./postActionTypes";
import initialState from "../../../common/initialState";

export default function postsReducer(
  state: Array<Object> = initialState.posts,
  action: Object
): Array<Object> {
  switch (action.type) {
    case types.POST_FETCH_SUCCESS:
      return [...action.payload];

    case types.POST_FETCH:
    case types.POST_FETCH_ERROR:
    default:
      return state;
  }
}
