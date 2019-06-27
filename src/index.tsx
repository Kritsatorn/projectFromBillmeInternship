import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Route, Switch, Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { BillPaymentPage } from './pages/BillPaymentPage/BillPaymentPage';
import { CreateBillPage } from './pages/CreateBillPage/CreateBillPage';
import { SelectFriendPage } from './pages/SelectFriendPage/SelectFriendPage';
import './styles/index.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact={true} path="/" component={ProfilePage} />
      <Route exact={true} path="/create" component={CreateBillPage}/>
      <Route exact={true} path="/payment" component={BillPaymentPage}/>
      <Route exact={true} path="/select" component={SelectFriendPage}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
