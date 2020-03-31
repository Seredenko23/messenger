import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import LoginForm from "../LoginForm/LoginForm";
import Messenger from "../Messenger/Messenger";
import './Navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/sign-up'}>
            <SignUp/>
          </Route>
          <Route path={'/log-in'}>
            <LoginForm/>
          </Route>
          <Route path={'/chat'}>
            <Messenger/>
          </Route>
          <Route path={'/'}>
            <Redirect to={'log-in'}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Navigation;
