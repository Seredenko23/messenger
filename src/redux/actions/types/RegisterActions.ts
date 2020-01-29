export interface IRegister {
  type: string;
  payload: boolean;
}

export interface IRegisterSuccess {
  type: string;
  payload: boolean;
}

export interface IRegisterError {
  type: string;
  payload: boolean;
}

export type RegisterActions = IRegister
  | IRegisterSuccess
  | IRegisterError;
