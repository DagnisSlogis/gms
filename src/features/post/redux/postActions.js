import * as types from "./postActionTypes";
import * as postAPI from "./postAPI";

export const fetchPostBegin = () => ({
  type: types.FETCH_POST
});

export const fetchPostSuccess = payload => ({
  type: types.FETCH_POST_SUCCESS,
  payload
});

export const fetchPostError = payload => ({
  type: types.FETCH_POST_ERROR,
  payload
});

export const fetchPost = id => dispatch => {
  dispatch(fetchPostBegin());
  return postAPI
    .fetchPost(id)
    .then(response => {
      dispatch(fetchPostSuccess(response.data));
    })
    .catch(err => {
      dispatch(fetchPostError(err));
    });
};
