import {User} from "../../../models/user";

export interface LoginState {
  isPending: boolean;
  user: User | {};
  error: Error | string;
  accessToken: string;
  refreshToken: string;
}
