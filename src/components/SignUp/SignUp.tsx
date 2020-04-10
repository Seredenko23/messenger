import React, {Component, FormEvent} from 'react';
import { bindActionCreators } from "redux";
import {registerClear, registerUser} from "../../redux/actions/sign-up";
import { connect } from "react-redux";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import {email, minLength6, required} from "../../service/validators";
import RedirectLink from "../RedirectLink/RedirectLink";
import './SignUp.scss'
import {SignUpProps, SignUpState} from "./models/SignUp";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {HashLoader} from "react-spinners";
import {Redirect} from "react-router";

class SignUp extends Component<SignUpProps, SignUpState> {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    }
  }

  componentDidMount(): void {
    this.props.registerClear()
  }

  changeHandle = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  };

  onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.props.registerUser(this.state)
  };

  render() {
    return (
      <div className={'sign-up-wrapper'}>
        <form className={'sign-up-form card'}
              onSubmit={this.onSubmit}
        >
          <div className={'header-wrapper'}>
            <h1>Sign up</h1>
          </div>
          {this.props.registrationSucceed && <Redirect to={'log-in'}/>}
          {this.props.error && <ErrorMessage error={this.props.error} />}
          <label className={'sing-up-label'}>First Name</label>
          <FormInput type="text"
                     name={'firstName'}
                     placeholder={'First Name'}
                     handler={this.changeHandle}
                     value={this.state.firstName}
                     validate={[required]}
          />
          <label className={'sing-up-label'}>Last Name</label>
          <FormInput type="text"
                     name={'lastName'}
                     placeholder={'Last name'}
                     handler={this.changeHandle}
                     value={this.state.lastName}
                     validate={[required]}
          />
          <label className={'sing-up-label'}>Login</label>
          <FormInput type="text"
                     name={'username'}
                     placeholder={'Username'}
                     handler={this.changeHandle}
                     value={this.state.username}
                     validate={[required, minLength6]}
          />
          <label className={'sing-up-label'}>Email</label>
          <FormInput type="text"
                     name={'email'}
                     placeholder={'Email'}
                     handler={this.changeHandle}
                     value={this.state.email}
                     validate={[email, required]}
          />
          <label className={'sing-up-label'}>Password</label>
          <FormInput type="password"
                     name={'password'}
                     placeholder={'Password'}
                     handler={this.changeHandle}
                     value={this.state.password}
                     validate={[required, minLength6]}
          />
          <FormButton type={'submit'}>
            Submit
          </FormButton>
          <RedirectLink link={'log-in'}>
            Login
          </RedirectLink>
          <HashLoader
            css={'left: 50%; transform: translateX(-50%);'}
            size={60}
            color={'#624fbf'}
            loading={this.props.isPending}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.signUp.error,
    isPending: state.signUp.registerIsPending,
    registrationSucceed: state.signUp.registrationSucceed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: bindActionCreators(registerUser, dispatch),
    registerClear: bindActionCreators(registerClear, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
