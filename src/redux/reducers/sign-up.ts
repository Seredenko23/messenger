import {
  REGISTER_PENDING,
  REGISTER_ERROR,
  REGISTER_SUCCESS, REGISTER_SUCCESS_CLEAR,
} from "../actions/sign-up";

import { RegisterActions} from "../actions/types/RegisterActions";
import { Reducer } from "redux";
import { RegisterState } from "./types/RegisterState";

const initialState: RegisterState = {
  registrationSucceed: false,
  registerIsPending: false,
  error: null
};

export const signUp: Reducer<RegisterState> = (state=initialState, action) => {
  switch (action.type) {
    case REGISTER_PENDING:
      return {
        ...state,
        registerIsPending: action.payload
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registrationSucceed: true,
        registerIsPending: false
      };
    case REGISTER_ERROR:
      return {
        ...state,
        registerIsPending: action.payload.isPending,
        error: action.payload.error
      };
    case REGISTER_SUCCESS_CLEAR:
      return {
        ...state,
        registrationSucceed: false,
        registerIsPending: false,
        error: null
      };
    default:
      return state;
  }
};
