import {Message as MessageType} from "../../../../../../../models/messages";
import {User} from "../../../../../../../models/user";

export interface MessageListProps {
  messages: MessageType[];
  subscribeMessage: () => void;
  subscribeIsTyping: () => void;
  user: User;
  isTyping: boolean
}
