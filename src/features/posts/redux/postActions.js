// @flow
import * as types from "./postActionTypes";
import * as postsAPI from "./postsAPI";

type dispatchedObjectWithPayload = {
  type: boolean,
  payload: Object
}

type dispatchedObject = {
  type: boolean
}

export const fetchPostsBegin = (): dispatchedObject => ({
  type: types.POST_FETCH
});

export const fetchPostsSuccess = (payload: Object): dispatchedObjectWithPayload  => ({
  type: types.POST_FETCH_SUCCESS,
  payload
});

export const fetchPostError = (payload: Object): dispatchedObjectWithPayload => ({
  type: types.POST_FETCH_ERROR,
  payload
});

export const fetchPosts = (page: number): Function => dispatch => {
  dispatch(fetchPostsBegin());
  return postsAPI
    .fetchPosts(page.toString())
    .then(response => dispatch(fetchPostsSuccess(response.data)))
    .catch(err => dispatch(fetchPostError(err)));
};
