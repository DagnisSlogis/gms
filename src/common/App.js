import React from "react";
import { PostsPageConnected } from "../features/posts";
import { PostPageConnected } from "../features/post";
import { BrowserRouter, Route } from "react-router-dom";

import { NavbarWithRouter } from "./components/navbar";


const App = () => (
  <BrowserRouter>
    <div>
      <NavbarWithRouter />
      <Route exact path="/" component={PostsPageConnected} />
      <Route path="/post/:id" component={PostPageConnected} />
    </div>
  </BrowserRouter>
);

export default App;
