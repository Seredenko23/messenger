import {Message} from "../../../models/messages";

export interface SocketState {
  messages: Message[];
  isTyping: boolean;
}
