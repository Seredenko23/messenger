import {UserLogin} from "../../components/models/user";
import {Action, ActionCreator, Dispatch} from "redux";

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

const logIn: ActionCreator<Action> = () => {
    return {
        type: LOGIN_PENDING,
        payload: true,
    }
};

const logInSuccess: ActionCreator<Action> = () => {
    return {
        type: LOGIN_SUCCESS,
        payload: false,
    }
};

const logInError: ActionCreator<Action> = () => {
    return {
        type: LOGIN_ERROR,
        payload: false,
    }
};

export const loginUser = (user: UserLogin) => {
    return (dispatch: Dispatch) => {
        dispatch(logIn());
        setTimeout(() => {
            console.log(user);
            dispatch(logInSuccess())
        }, 5000)
    }
};