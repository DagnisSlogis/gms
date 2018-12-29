import { get } from "axios";

import { API_URL } from 'config/APIConfig';
import { createReducerTypes } from 'utils/dataModule';

export const posts = createReducerTypes('posts');

export default function reducer(state = [], { type, payload }) {
  switch (type) {
    case posts.fetchSuccess:
      return [...state, ...payload];
    default:
      return state;
  }
}

const fetchPostsBegin = () => ({ type: posts.fetch });

const fetchPostsSuccess = (payload) => ({ type: posts.fetchSuccess, payload });

const fetchPostError = (payload) => ({ type: posts.fetchError, payload });

export const fetchPosts = (page) => (dispatch) => {
  dispatch(fetchPostsBegin());
  console.log(page);

  return get(`${API_URL}/posts?_embed&per_page=12&page=${page}`)
    .then(({ data }) => dispatch(fetchPostsSuccess(data)))
    .catch(err => dispatch(fetchPostError(err)));
};
