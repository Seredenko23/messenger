import React, {Component} from 'react';
import './FormButton.scss'
import {FormButtonProps} from "./models/FormButton";

class FormButton extends Component<FormButtonProps> {
  render() {
    return (
      <button className={'form-button'}
              type={this.props.type}
      >
        {this.props.children}
      </button>
    );
  }
}

export default FormButton;
