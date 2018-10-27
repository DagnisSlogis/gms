import { get } from "axios";

import { API_URL } from '../../../config/APIConfig';


const POSTS_FETCH = "POSTS_FETCH";
const POSTS_FETCH_SUCCESS = "POSTS_FETCH_SUCCESS";
const POSTS_FETCH_ERROR = "POSTS_FETCH_ERROR";

export default function reducer(state = [], { type, payload }) {
  switch (type) {
    case POSTS_FETCH_SUCCESS:
      return [...state, ...payload];
    default:
      return state;
  }
}

const fetchPostsBegin = () => ({ type: POSTS_FETCH });

const fetchPostsSuccess = (payload) => ({ type: POSTS_FETCH_SUCCESS, payload });

const fetchPostError = (payload) => ({ type: POSTS_FETCH_ERROR, payload });

export const fetchPosts = (page) => (dispatch) => {
  dispatch(fetchPostsBegin());

  return get(`${API_URL}/posts?_embed&per_page=12&page=${page}`)
    .then(({ data }) => dispatch(fetchPostsSuccess(data)))
    .catch(err => dispatch(fetchPostError(err)));
};
