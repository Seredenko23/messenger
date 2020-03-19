import {User} from "./user";
import {MessageBody} from "./MessageBody";

export interface Message {
  _id?: string;
  threadId: string;
  user: User | number;
  messageBody: MessageBody;
  createdAt?: string;
}
