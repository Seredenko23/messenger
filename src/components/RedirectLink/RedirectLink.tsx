import React, {Component} from 'react';
import { withRouter } from "react-router";
import './RedirectLink.scss'

interface Props{
  link: string
  history: string[]
}

class RedirectLink extends Component<Props> {

  handlerCreator: (link: string) => void = (link) => {
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
