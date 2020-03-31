import {User} from "../../models/user";
import {Action, ActionCreator, Dispatch} from "redux";
import {regUser} from "../../service/signUp";

export const REGISTER_PENDING: string = 'ACTION_REGISTER_PENDING';
export const REGISTER_SUCCESS: string = 'ACTION_REGISTER_SUCCESS';
export const REGISTER_ERROR: string = 'ACTION_REGISTER_ERROR';

const register: ActionCreator<Action> = () => {
  return {
    type: REGISTER_PENDING,
    payload: true,
  }
};

const registerSuccess: ActionCreator<Action> = () => {
  return {
    type: REGISTER_SUCCESS,
    payload: false,
  }
};

const registerError: ActionCreator<Action> = (err: Error) => {
  return {
    type: REGISTER_ERROR,
    payload: {
      isPending: false,
      error: err
    },
  }
};

export const registerUser: (user: User)
  => (dispatch: Dispatch)
  => void = (user: User) => {
  return (dispatch: Dispatch) => {
    dispatch(register());
    regUser(user)
      .then(() => {
        dispatch(registerSuccess());
    })
      .catch(err => {
        dispatch(registerError(err));
    })
  }
};
