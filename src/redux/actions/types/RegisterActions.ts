export interface IRegister {
  type: string;
  payload: {
    isPending?: boolean;
    error?: Error
  };
}

export interface IRegisterSuccess {
  type: string;
  payload: {
    isPending?: boolean
  };
}

export interface IRegisterError {
  type: string;
  payload: {
    isPending?: boolean
  };
}

export type RegisterActions = IRegister
  | IRegisterSuccess
  | IRegisterError;
