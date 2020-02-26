import {User} from "../../../models/user";

export interface ILoginPending {
  type: string;
  payload: boolean;
}

export interface ILoginSuccess {
  type: string;
  payload: {
    user: User;
    isPending: boolean;
    accessToken: string;
    refreshToken: string;
  };
}

export interface ILoginError {
  type: string;
  payload: {
    isPending: boolean;
    error: Error;
  };
}

export type LoginActions = ILoginPending
  | ILoginError
  | ILoginSuccess;
