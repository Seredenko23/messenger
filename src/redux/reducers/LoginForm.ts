import {
  LOGIN_ERROR,
  LOGIN_PENDING,
  LOGIN_SUCCESS
} from "../actions/login";

import { LoginState } from "./types/LoginState";
import { Reducer } from "redux";
import { LoginActions } from "../actions/types/LoginActions";

const initialState: LoginState = {
  isLoginPending: false,
  isLoginSuccess: false,
  loginError: null,
};

export const loginReducer: Reducer<LoginState> = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: action.payload
      };
    case LOGIN_PENDING:
      return {
        ...state,
        isLoginPending: action.payload
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload.error
      };
    default:
      return state;
  }
};
