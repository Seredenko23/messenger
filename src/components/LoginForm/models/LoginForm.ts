import {Dispatch} from "redux";
import {User} from "../../../models/user";

export interface LoginFormProps {
  login: (user: {email: string, password: string}) => (dispatch: Dispatch) => void;
  history: string[];
  user: User;
  error: Error;
  isPending: boolean;
}

export interface LoginFormState {
  [param: string]: string;
}
