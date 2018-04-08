import * as types from "./postActionTypes";
import initialState from "../../../common/initialState";

export default function postReducer(state = initialState.post, action) {
  switch (action.type) {
    case types.POST_FETCH_SUCCESS:
      return action.payload;

    case types.POST_FETCH:
      return {};

    case types.POST_FETCH_ERROR:
    default:
      return state;
  }
}
