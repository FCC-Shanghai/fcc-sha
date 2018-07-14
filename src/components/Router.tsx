// dependencies
import * as React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

// components

import AboutUs from '@/pages/AboutUs';
import Contributors from '@/pages/Contributors';
import Achievements from '@/pages/Achievements';
import SideBar from '@/pages/SideBar';

export const FccSha = () => (
  <Router>
    <div className="sha-main">
      <div className="sha-side-main">
        <SideBar />
      </div>
      <div className="sha-router-main">
        <Redirect from="/" to="about-us" />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contributors" component={Contributors} />
        <Route path="/achievements" component={Achievements} />
      </div>
    </div>
  </Router>
);
