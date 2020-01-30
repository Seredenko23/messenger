import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { registerUser } from "../../redux/actions/sign-up";
import { connectWebsocket } from "../../redux/actions/websocket";
import { connect } from "react-redux";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";

import './SignUp.scss'

interface Props {
  registerUser: (user) => void;
  connectWebsocket: (url: string) => void;
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
      <div className={'sign-up-wrapper'}>
        <form className={'sign-up-form'}
              onSubmit={this.onSubmit}
        >
          <label className={'sing-up-label'}>First Name</label>
          <FormInput type="text"
                             name={'firstName'}
                             placeholder={'First Name'}
                             handler={this.changeHandle}
                             value={this.state.firstname}
          />
          <label className={'sing-up-label'}>Last Name</label>
          <FormInput type="text"
                             name={'lastName'}
                             placeholder={'Last name'}
                             handler={this.changeHandle}
                             value={this.state.lastName}
          />
          <label className={'sing-up-label'}>Login</label>
          <FormInput type="text"
                             name={'login'}
                             placeholder={'Login'}
                             handler={this.changeHandle}
                             value={this.state.login}
          />
          <label className={'sing-up-label'}>Email</label>
          <FormInput type="text"
                             name={'email'}
                             placeholder={'Email'}
                             handler={this.changeHandle}
                             value={this.state.email}
          />
          <label className={'sing-up-label'}>Password</label>
          <FormInput type="password"
                             name={'password'}
                             placeholder={'Password'}
                             handler={this.changeHandle}
                             value={this.state.password}
          />
          <FormButton type={'submit'}>
            Submit
          </FormButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: bindActionCreators(registerUser, dispatch),
    connectWebsocket: bindActionCreators(connectWebsocket, dispatch),
  }
};

export default connect(null, mapDispatchToProps)(SignUp);
