import {User} from "./user";

export interface Thread {
  _id: number;
  users: User[];
}
