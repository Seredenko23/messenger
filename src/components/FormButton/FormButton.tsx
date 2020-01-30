import React, {Component} from 'react';

interface Props {
  type: 'button' | 'reset' | 'submit' | undefined
}

class FormButton extends Component<Props> {
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
