const POSTS_PAGE_INCR = "POSTS_PAGE_INCR";

export default function reducer(state = 1, { type }) {
  switch (type) {
    case POSTS_PAGE_INCR:
      return state + 1;
    default:
      return state;
  }
}

export const incrementPostsPage = () => ({ type: POSTS_PAGE_INCR });
