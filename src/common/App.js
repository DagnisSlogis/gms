import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { PostsPageConnected } from 'features/posts';
import { PostPageConnected } from 'features/post';
import { AboutUsConnected } from 'features/about-us';
import { LearningConnected } from 'features/learning';
import { ProjectsConnected } from 'features/projects';
import { FifthHouseConnected } from 'features/fifth-house';
import { NavbarWithRouter } from 'common/components/navbar';


const App = () => (
  <BrowserRouter>
    <div>
      <NavbarWithRouter />
      <Route exact path="/" component={PostsPageConnected} />
      <Route exact path='/par-mums' component={AboutUsConnected} />
      <Route exact path='/macibas' component={LearningConnected} />
      <Route exact path='/projekti' component={ProjectsConnected} />
      <Route exact path='/piekta-maja' component={FifthHouseConnected} />
      <Route path="/raksts/:id" component={PostPageConnected} />
    </div>
  </BrowserRouter>
);

export default App;
