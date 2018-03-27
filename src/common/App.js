import React from "react";
import PostsPage from "../features/posts/PostsPage";
import PostPage from "../features/post/PostPage";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={PostsPage} />
      <Route path="/post/:id" component={PostPage} />
    </div>
  </BrowserRouter>
);

export default App;
