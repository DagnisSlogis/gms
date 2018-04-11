import * as types from "./postActionTypes";
import initialState from "../../../common/initialState";

export default function postLoadingReducer(state = initialState.postLoading, action) {
  switch (action.type) {
    case types.POST_FETCH:
      return true;

    case types.POST_FETCH_ERROR:
    case types.POST_FETCH_SUCCESS:
      return false;
    default:
      return state;
  }
}
