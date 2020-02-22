import {User} from "./user";

export interface Message {
  _id: string;
  threadId: string;
  user: User;
  messageBody: string;
}
