import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import './Navigation.scss';
import SignUp from "../SignUp/SignUp";

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
          <Route path={'/'}>
            <Redirect to={'sign-up'}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Navigation;
