import React, {Component} from 'react';

interface Props {
  type: string;
  placeholder?: string;
  value: string;
  handler?: (event: React.FormEvent<HTMLInputElement>) => void;
  name: string;
}

class FormInput extends Component<Props> {
  render() {
    return (
      <input className='form-input'
             type={this.props.type}
             value={this.props.value}
             placeholder={this.props.placeholder}
             onChange={this.props.handler}
             name={this.props.name}
      />
    );
  }
}

export default FormInput;
