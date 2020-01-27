import React, {Component} from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom";

import './Navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          {/*Here will be navigation bar*/}
        </nav>
        <Switch>
          {/*Here will be routes*/}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Navigation;
