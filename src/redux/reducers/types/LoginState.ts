import {User} from "../../../models/user";

export interface LoginState {
  isPending: boolean;
  user: User | {};
  error: Error | string;
  access_token: string;
  refresh_token: string;
}
