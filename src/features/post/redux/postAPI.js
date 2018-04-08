import axios from "axios";

export const fetchPost = id =>
  axios.get("http://gulbenesmakslasskola.lv/wp-json/wp/v2/posts/" + id + "?_embed");
