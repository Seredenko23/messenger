import {User} from "../../../../../../../models/user";

export interface ThreadOutProps {
  user: User;
  logOut: () => void;
}
