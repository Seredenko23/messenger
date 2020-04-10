import React, {Component} from 'react';
import {connect} from "react-redux";
import { login } from "../../redux/actions/login";
import { bindActionCreators, Dispatch } from "redux";
import './LoginForm.scss'
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import {Redirect, withRouter} from "react-router";
import {checkIfEmpty} from "../../service/utilities";
import {LoginFormProps, LoginFormState} from "./models/LoginForm";
import RedirectLink from "../RedirectLink/RedirectLink";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { HashLoader } from "react-spinners";

class LoginForm extends Component<LoginFormProps, LoginFormState> {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // @ts-ignore
    this.props.login(this.state)
  };

  changeHandle = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  };

  render() {
    return (
    <div className='login'>
      {!checkIfEmpty(this.props.user) && <Redirect to={'chat'}/>}
    <div className='wrapper'>
      <div className='block-login card'>
        <div className='login-form-wrapper'>
          <h1 className={'login-header'}>Login</h1>
          {this.props.error && <ErrorMessage error={this.props.error} />}
          <form name='loginForm'
                className='login-form'
                onSubmit={this.onSubmit}
          >
            <label htmlFor="email"
                   className='label'
            >
              Email:
            </label>
            <FormInput type="text"
                       name={'email'}
                       placeholder={'Email'}
                       handler={this.changeHandle}
                       value={this.state.email}
            />
            <label htmlFor='password'
                   className='label'
            >
              Password:
            </label>
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
          <RedirectLink link={'sign-up'}>
            Sign-up
          </RedirectLink>
          <HashLoader
            css={'left: 50%; transform: translateX(-50%);'}
            size={60}
            color={'#624fbf'}
            loading={this.props.isPending}
          />
        </div>
      </div>
    </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isPending: state.userReducer.isPending,
    user: state.userReducer.user,
    error: state.userReducer.error
  };
};

const  mapDispatchToProps = (dispatch) => {
  return {
    login: bindActionCreators(login, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter<any, any>(LoginForm));
