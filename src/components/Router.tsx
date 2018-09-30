// dependencies
import * as React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import * as Loadable from 'react-loadable';

import Loading from '@Components/Loading';

function Loader<Props extends object>(
  loader: () => Promise<React.ComponentType<Props> | { default: React.ComponentType<Props> }>
): React.ComponentType<Props> & Loadable.LoadableComponent {
  return Loadable({
    loader: loader,
    loading: Loading
  });
}
// components
const AboutUs = Loader(() => import(/* webpackChunkName: "AboutUs" */ '@/pages/AboutUs'));

const Contributors = Loader(() => import(/* webpackChunkName: "Contributors" */ '@/pages/Contributors'));

const Achievements = Loader(() => import(/* webpackChunkName: "Achievements" */ '@/pages/Achievements'));
const SideBar = Loader(() => import(/* webpackChunkName: "SideBar" */ '@/pages/SideBar'));

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
