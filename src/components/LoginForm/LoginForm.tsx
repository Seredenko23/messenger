import React, {Component} from 'react';
import {connect} from "react-redux";
import { login } from "../../redux/actions/login";
import { bindActionCreators, Dispatch } from "redux";
import './LoginForm.scss'
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
interface Props {
  login: (email: string, password: string) => (dispatch: Dispatch) => void;
  isLoginPending: boolean;
  isLoginSuccess: boolean;
  loginError: Error | null;
}

interface State {
  [param: string]: string;
}

class LoginForm extends Component<Props,State> {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    let {email, password} = this.state;
    this.props.login(email, password);
  };

  changeHandle = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  };

  render() {
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
    return (
    <div className='login'>
    <div className='wrapper'>
      <div className='block-login card'>
      <div className='login-form-wrapper'>
          <form name='loginForm'
                className='login-form'
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
            {isLoginPending && <div>Please wait</div>}
            {isLoginSuccess && <div>Welcome back!</div>}
            {loginError && <div>{loginError.message}</div>}
          </form>
        </div>
      </div>
    </div>
   </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.loginReducer.isLoginPending,
    isLoginSuccess: state.loginReducer.isLoginSuccess,
    loginError: state.loginReducer.loginError
  };
};

const  mapDispatchToProps = (dispatch) => {
  return {
    login: bindActionCreators(login, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
