import { get } from "axios";

import { API_URL } from 'config/APIConfig';
import { createReducerTypes } from 'utils/dataModule';


const post = createReducerTypes('post');

export default function reducer(state = {}, action) {
  switch (action.type) {
    case post.fetchSuccess:
    case post.open:
      return action.payload;

    case post.fetch:
      return {};

    default:
      return state;
  }
}

const fetchPostBegin = () => ({ type: post.fetch });

const fetchPostSuccess = (payload) => ({ type: post.fetchSuccess, payload });

const fetchPostError = (payload) => ({ type: post.fetchError, payload });

export const fetchPost = id => dispatch => {
  dispatch(fetchPostBegin());

  return get(`${API_URL}/posts/${id}?_embed`)
    .then(({ data }) => dispatch(fetchPostSuccess(data)))
    .catch(err => dispatch(fetchPostError(err)));
};

export const openPost = (payload) => (dispatch) =>
  dispatch({ type: post.open, payload });
