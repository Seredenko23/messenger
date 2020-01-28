import React, {Component} from 'react';
import {connect} from "react-redux";
import {login} from "../../redux/reducers/LoginForm";


class LoginForm extends Component<any,any> {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let {isLoginPending, isLoginSuccess, loginError} = this.props;
        return (
            <div className='login-form-wrapper' onSubmit={this.onSubmit}>
                <form name='loginForm'>
                    <label htmlFor="">Email:</label>
                    <input type='email' name='email' onChange={e => this.setState({email: e.target.value})}/>
                    <label htmlFor=''>Password:</label>
                    <input type='password' name='password' onChange={e => this.setState({password: e.target.value})}/>

                    <input type='submit' value='Login'/>

                    {isLoginPending && <div>Please wait</div>}
                    {isLoginSuccess && <div>Welcome back!</div>}
                    {loginError && <div>{loginError.message}</div>}
                </form>
            </div>
        );
    }
    onSubmit = (e) => {
        e.preventDefault();
        let {email, password} = this.state;
        this.props.login(email, password);
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginPending: state.loginReducer.isLoginPending,
        isLoginSuccess: state.loginReducer.isLoginSuccess,
        loginError: state.loginReducer.loginError
    };
}

const  mapDispatchToProps = (dispatch) => {
    return {
        login: (email,password) => dispatch(login(email, password))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);