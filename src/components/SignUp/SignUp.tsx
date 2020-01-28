import React, {Component} from 'react';

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {registerUser} from "../../redux/actions/sign-up";

import './SignUp.scss'

interface Props {
  registerUser: (user) => void
}

interface State {
  [param: string]: string;
}

class SignUp extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      login: '',
      email: '',
      password: '',
    }
  }

  changeHandle = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.registerUser(this.state)
  };

  render() {
    return (
      <div className={'sign-up-form'}>
        <form className={'sign-up-form'}
              onSubmit={this.onSubmit}
        >
          <label className={'sing-up-label'}>
            First Name
            <input type="text"
                   className="sign-up-fields"
                   name={'firstName'}
                   onChange={this.changeHandle}
            />
          </label>
          <label className={'sing-up-label'}>
            Last Name
            <input type="text"
                   className="sign-up-fields"
                   name={'lastName'}
                   onChange={this.changeHandle}
            />
          </label>
          <label className={'sing-up-label'}>
            Login
            <input type="text"
                   className="sign-up-fields"
                   name={'login'}
                   onChange={this.changeHandle}
            />
          </label>
          <label className={'sing-up-label'}>
            Email
            <input type="text"
                   className="sign-up-fields"
                   name={'email'}
                   onChange={this.changeHandle}
            />
          </label>
          <label className={'sing-up-label'}>
            Password
            <input type="password"
                   className="sign-up-fields"
                   name={'password'}
                   onChange={this.changeHandle}
            />
          </label>
          <button type={'submit'}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: bindActionCreators(registerUser, dispatch)
  }
};

export default connect(null, mapDispatchToProps)(SignUp);
