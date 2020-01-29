import {Action, ActionCreator, Dispatch} from "redux";

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const setLoginPending: ActionCreator<Action> = (isLoginPending: boolean) => {
  return {
    type: LOGIN_PENDING,
    payload: isLoginPending
  };
};

export const setLoginSuccess: ActionCreator<Action> = (isLoginSuccess: boolean) => {
  return {
    type: LOGIN_SUCCESS,
    payload: isLoginSuccess
  };
};

export const setLoginError: ActionCreator<Action> = (loginError: string) => {
  return {
    type: LOGIN_ERROR,
    payload: {
      error: loginError
    }
  };
};

export const login: (email: string, password: string)
  => (dispatch: Dispatch)
  => void = (email: string, password: string) => {
  return (dispatch: Dispatch) => {
    dispatch(setLoginPending(true));
    sendLoginRequest(email, password)
      .then(success => {
        dispatch(setLoginPending(false));
        dispatch(setLoginSuccess(true));
      })
      .catch(err => {
        dispatch(setLoginPending(false));
        dispatch(setLoginError(err));
      });
  };
};

const sendLoginRequest: (email: string, password: string) => Promise<boolean>
  = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@example.com' && password === 'admin') {
        return resolve(true);
      } else {
        return reject(new Error('Invalid email or password'));
      }
    },1000);
  });
};
