import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  Redirect,
  browserHistory
} from 'react-router';

import Root from '../screens/layouts/Root';
import Main from '../screens/Main';
import About from '../screens/About';
import Projects from '../screens/Projects';
import Careers from '../screens/Careers';

function AppRouter() {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Root}>
        <IndexRoute component={Main} />
        <Route path='/who_we_are' component={About} />
        <Route path='/our_work' component={Projects} />
        <Route path='/careers' component={Careers} />
      </Route>
      <Redirect from="/*" to="/" />
    </Router>
  );
}

export default AppRouter;
