import {
  LOGIN_ERROR,
  LOGIN_PENDING,
  LOGIN_SUCCESS
} from "../actions/login";

import { LoginState } from "./types/LoginState";
import { Reducer } from "redux";

const initialState: LoginState = {
  isPending: false,
  user: {},
  error: '',
  accessToken: '',
  refreshToken: '',
};

export const loginReducer: Reducer<LoginState> = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isPending: action.payload.isPending,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken
      };
    case LOGIN_PENDING:
      return {
        ...state,
        isPending: action.payload
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isPending: action.payload.isPending,
        error: action.payload.err
      };
    default:
      return state;
  }
};
