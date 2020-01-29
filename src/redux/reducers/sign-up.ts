import {
  REGISTER_PENDING,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from "../actions/sign-up";

import { RegisterActions} from "../actions/types/RegisterActions";
import { Reducer } from "redux";
import { RegisterState } from "./types/RegisterState";

const initialState: RegisterState = {
  registerIsPending: false
};

export const signUp: Reducer<RegisterState, RegisterActions> = (state=initialState, action) => {
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
        registerIsPending: action.payload
      };
    default:
      return state;
  }
};
