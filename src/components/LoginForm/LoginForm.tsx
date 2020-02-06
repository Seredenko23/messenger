import React, {Component} from 'react';
import {connect} from "react-redux";
import { login } from "../../redux/actions/login";
import { bindActionCreators, Dispatch } from "redux";
import './LoginForm.scss'
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import {User} from "../../models/user";

interface Props {
  login: (user: {email: string, password: string}) => (dispatch: Dispatch) => void;
  user: User;
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
    // @ts-ignore
    this.props.login(this.state);
  };

  changeHandle = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  };

  render() {
    return (
    <div className='login'>
    <div className='wrapper'>
      <div className='block-login card'>
      <div className='login-form-wrapper'>
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
        </div>
      </div>
    </div>
   </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isPending: state.loginReducer.isPending,
    user: state.loginReducer.user,
  };
};

const  mapDispatchToProps = (dispatch) => {
  return {
    login: bindActionCreators(login, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
