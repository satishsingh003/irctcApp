import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { GoogleLogin } from 'react-google-login-component';
//import logo from './images/callme2.jpg';
import Login from './googleLogin.jsx';
import DashboardHome from './dashboardHome.jsx';

import './App.css';
import { SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER } from 'constants';

class App extends Component {
  render() {
    return (
      <div id="app" className="clearfix">
        <Switch>
          <Route path="/dashboard" component={DashboardHome}></Route>
          <Route path="/" component={Login}></Route>
        </Switch>

      </div>
    )
  }
}

export default App;
