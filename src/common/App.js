import React from "react";
import { PostsPageConnected } from "../features/posts";
import { PostPageConnected } from "../features/post";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar/>
      <Route exact path="/" component={PostsPageConnected} />
      <Route path="/post/:id" component={PostPageConnected} />
    </div>
  </BrowserRouter>
);

export default App;
