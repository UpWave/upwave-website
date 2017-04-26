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
import Greeting from '../screens/Greeting';
import Career from '../screens/dialogs/Career';

function AppRouter() {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Root}>
        <IndexRoute component={Main} />
        <Route path='/who_we_are' component={About} />
        <Route path='/our_work' component={Projects} />
        <Route path='/careers' component={Careers}>
          <Route path='/careers/:id' component={Career} />
        </Route>
        <Route path='/greeting' component={Greeting} />
      </Route>
      <Redirect from="/*" to="/" />
    </Router>
  );
}

export default AppRouter;
