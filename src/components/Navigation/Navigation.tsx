import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import LoginForm from "../LoginForm/LoginForm";

import './Navigation.scss';
import Messenger from "../Messenger/Messenger";
import ThreadListInbox from "../ThreadListInbox/ThreadListInbox";

class Navigation extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          {/*Here will be navigation bar*/}
        </nav>
        <Switch>
          <Route path={'/sign-up'}>
            <SignUp/>
          </Route>
          <Route path={'/log-in'}>
            <LoginForm/>
          </Route>
          <Route path={'/chat'}>
            <ThreadListInbox/>
            <Messenger/>
          </Route>
          <Route path={'/'}>
            <Redirect to={'log-in'}/>{/*Вернуть в log-in*/}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Navigation;
