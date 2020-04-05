import {Message} from "../../../models/messages";
import {User} from "../../../models/user";

export interface SocketState {
  messages: Message[];
  searchableUsers: User[]
  isTyping: boolean;
  isEmpty: boolean;
  allMessageIsPending: boolean;
}
