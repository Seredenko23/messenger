export interface IRegister {
  type: string;
  payload: boolean
}

export interface IRegisterSuccess {
  type: string;
  payload: boolean
}

export interface IRegisterError {
  type: string;
  payload: boolean
}

export type RegisterAction = IRegister | IRegisterSuccess | IRegisterError;
