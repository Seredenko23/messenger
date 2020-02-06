import {Action, ActionCreator, Dispatch} from "redux";
import {logIn} from "../../service/logIn";
import {User} from "../../models/user";

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const setLoginPending: ActionCreator<Action> = () => {
  return {
    type: LOGIN_PENDING,
    payload: true
  };
};

export const setLoginSuccess: ActionCreator<Action> = (user: User) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user: user,
      isPending: false
    }
  };
};

export const setLoginError: ActionCreator<Action> = (loginError: string) => {
  return {
    type: LOGIN_ERROR,
    payload: {
      isPending: false,
      error: loginError
    }
  };
};

export const login: (user)
  => (dispatch: Dispatch)
  => void = (user) => {
  return (dispatch: Dispatch) => {
    dispatch(setLoginPending());
    logIn(user)
      .then(success => {
        console.log(success)
        dispatch(setLoginSuccess(success));
      })
      .catch(err => {
        dispatch(setLoginError(err));
      });
  };
};
