import React from "react";
import { PostsPageConnected } from "../features/posts";
import { PostPageConnected } from "../features/post";
import { BrowserRouter, Route } from "react-router-dom";

import { NavBarWithRouter } from "./components/Navbar";

const App = () => (
  <BrowserRouter>
    <div>
      <NavBarWithRouter />
      <Route exact path="/" component={PostsPageConnected} />
      <Route path="/post/:id" component={PostPageConnected} />
    </div>
  </BrowserRouter>
);

export default App;
