import React, {Component} from 'react';
import {ErrorMessageProps} from "./models/ErrorMessage";
import './ErrorMessage.scss'

class ErrorMessage extends Component<ErrorMessageProps> {
  render() {
    return (
      <p className={'error-message'}>
        {this.props.error.message}
      </p>
    );
  }
}

export default ErrorMessage;
