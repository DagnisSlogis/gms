import { posts } from './posts';

export default function reducer(state = 0, { type, payload }) {
  switch (type) {
    case posts.fetchSuccess:
      return state + 1;
    default:
      return state;
  }
}
