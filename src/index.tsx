import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { createBrowserHistory } from 'history';
import { Route, Switch, Router } from 'react-router-dom';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact={true} path="/" component={ProfilePage} />
    </Switch>
  </Router>,
  document.getElementById('root'));