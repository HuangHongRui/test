import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import history from './utils/history';
import store from './redux/store';

import Home from './pages/home/Home';
import Info from './pages/info/Info';
import Test from './pages/test/Redux';
import User from './pages/user/User';
import Name from './pages/message';
import Rx from './pages/test/Rxjs';

import Login from './pages/user';
import Sign from './pages/user';

import './global.scss';

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/save" component={Info}/>
          <Route path="/test" component={Rx}/>
          <Route path="/gift" component={Home}/>
          <Route path="/team" component={Info}/>
          <Route path="/message" component={Name}/>
          <Route path="/about" component={Test}/>
          <Route path="/user" component={User}/>
          <Route path="/login" component={Login}/>
          <Route path="/sign" component={Sign}/>
        </div>
      </ConnectedRouter>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
);