// @flow

import axios from "axios";

export const fetchPosts = (page: string): Promise<any> =>
  axios.get(
    "http://gulbenesmakslasskola.lv/wp-json/wp/v2/posts?_embed&per_page=12&page=" + page
  );
