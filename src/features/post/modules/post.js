import { get } from "axios";

import { API_URL } from '../../../config/APIConfig';


const POST_FETCH = "POST_FETCH";
const POST_OPEN = "POST_OPEN";
const POST_FETCH_SUCCESS = "POST_FETCH_SUCCESS";
const POST_FETCH_ERROR = "POST_FETCH";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case POST_FETCH_SUCCESS:
    case POST_OPEN:
      return action.payload;

    case POST_FETCH:
      return {};

    default:
      return state;
  }
}

const fetchPostBegin = () => ({ type: POST_FETCH });

const fetchPostSuccess = (payload) => ({ type: POST_FETCH_SUCCESS, payload });

const fetchPostError = (payload) => ({ type: POST_FETCH_ERROR, payload });

export const fetchPost = id => dispatch => {
  dispatch(fetchPostBegin());
  return get(`${API_URL}/posts/${id}?_embed`)
    .then(({ data }) => dispatch(fetchPostSuccess(data)))
    .catch(err => dispatch(fetchPostError(err)));
};

export const openPost = (payload) => (dispatch) =>
  dispatch({ type: POST_OPEN, payload });
