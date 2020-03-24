import {User} from "./user";

export interface Thread {
  _id: string;
  users: User[];
}
