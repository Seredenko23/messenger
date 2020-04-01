import {
  REGISTER_PENDING,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from "../actions/sign-up";

import { RegisterActions} from "../actions/types/RegisterActions";
import { Reducer } from "redux";
import { RegisterState } from "./types/RegisterState";

const initialState: RegisterState = {
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
    case REGISTER_ERROR:
      return {
        ...state,
        registerIsPending: action.payload
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerIsPending: action.payload.isPending,
        error: action.payload.error
      };
    default:
      return state;
  }
};
