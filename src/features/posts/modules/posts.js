import axios from "axios";

const POSTS_FETCH = "POSTS_FETCH";
const POSTS_FETCH_SUCCESS = "POSTS_FETCH_SUCCESS";
const POSTS_FETCH_ERROR = "POSTS_FETCH_ERROR";

export default function reducer(state = [], action) {
  switch (action.type) {
    case POSTS_FETCH_SUCCESS:
      return [...state, ...action.payload];

    case POSTS_FETCH:
    case POSTS_FETCH_ERROR:
    default:
      return state;
  }
}

const fetchPostsBegin = () => ({
  type: POSTS_FETCH
});

const fetchPostsSuccess = payload => ({
  type: POSTS_FETCH_SUCCESS,
  payload
});

const fetchPostError = payload => ({
  type: POSTS_FETCH_ERROR,
  payload
});

export const fetchPosts = page => dispatch => {
  dispatch(fetchPostsBegin());
  return axios
    .get(
      "http://gulbenesmakslasskola.lv/wp-json/wp/v2/posts?_embed&per_page=12&page=" +
        page
    )
    .then(response => dispatch(fetchPostsSuccess(response.data)))
    .catch(err => dispatch(fetchPostError(err)));
};
