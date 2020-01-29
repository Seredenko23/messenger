export interface ILoginPending {
  type: string;
  payload: boolean;
}

export interface ILoginSuccess {
  type: string;
  payload: boolean;
}

export interface ILoginError {
  type: string;
  payload: {
    error: Error;
  };
}

export type LoginActions = ILoginPending
  | ILoginError
  | ILoginSuccess;
