import {Message as MessageType} from "../../../../../../../models/messages";
import {User} from "../../../../../../../models/user";

export interface MessageListProps {
  messages: MessageType[];
  subscribeMessage: () => void;
  subscribeIsTyping: () => void;
  unsubscribeMessage: () => void;
  unsubscribeIsTyping: () => void;
  user: User;
  isTyping: boolean
}
