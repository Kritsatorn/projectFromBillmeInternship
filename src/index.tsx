import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { createBrowserHistory } from 'history';
import { Route, Switch, Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { CreateBillPage } from './pages/CreateBillPage/CreateBillPage';
import './styles/index.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact={true} path="/" component={ProfilePage} />
      <Route exact={true} path="/create" component={CreateBillPage}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
