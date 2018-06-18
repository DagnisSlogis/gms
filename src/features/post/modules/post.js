import axios from "axios";

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

    case POST_FETCH_ERROR:
    default:
      return state;
  }
}

const fetchPostBegin = () => ({
  type: POST_FETCH
});

const fetchPostSuccess = payload => ({
  type: POST_FETCH_SUCCESS,
  payload
});

const fetchPostError = payload => ({
  type: POST_FETCH_ERROR,
  payload
});

export const fetchPost = id => dispatch => {
  dispatch(fetchPostBegin());
  return axios
    .get("http://gulbenesmakslasskola.lv/wp-json/wp/v2/posts/" + id + "?_embed")
    .then(response => {
      dispatch(fetchPostSuccess(response.data));
    })
    .catch(err => dispatch(fetchPostError(err)));
};

export const openPost = payload => dispatch =>
  dispatch({
    type: POST_OPEN,
    payload
  });
