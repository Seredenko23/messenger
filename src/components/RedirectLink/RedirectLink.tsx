import React, {Component} from 'react';
import { withRouter } from "react-router";
import './RedirectLink.scss'
import {RedirectLinkProps} from "./models/RedirectLink";

class RedirectLink extends Component<RedirectLinkProps> {

  handlerCreator = (link: string): void  => {
      this.props.history.push(link)
  };

  render() {
    return (
      <span className={'redirect-link'}
            onClick={() => this.handlerCreator(this.props.link)}
      >
        {this.props.children}
      </span>
    );
  }
}

// @ts-ignore
export default withRouter(RedirectLink);
