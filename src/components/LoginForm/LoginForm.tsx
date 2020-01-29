import React, {Component} from 'react';
import {connect} from "react-redux";
import { login } from "../../redux/actions/login";
import {bindActionCreators, Dispatch} from "redux";

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
      <div className='login-form-wrapper'
           onSubmit={this.onSubmit}
      >
        <form name='loginForm'>
          <label htmlFor="">Email:</label>
          <input type='email'
                 name='email'
                 onChange={this.changeHandle}
          />
          <label htmlFor=''>Password:</label>
          <input type='password'
                 name='password'
                 onChange={this.changeHandle}
          />

          <input type='submit'
                 value='Login'
          />
          {isLoginPending && <div>Please wait</div>}
          {isLoginSuccess && <div>Welcome back!</div>}
          {loginError && <div>{loginError.message}</div>}
        </form>
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
