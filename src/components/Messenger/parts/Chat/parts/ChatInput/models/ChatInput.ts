import {User} from "../../../../../../../models/user";
import {Message} from "../../../../../../../models/messages";

export interface ChatInputProps {
  threadId: string;
  user: User;
  sendMessage: (message: Message) => void;
  setIsTyping: (isTyping: boolean) => void
}

export interface ChatInputState {
  messageBody: string;
  isRecording: boolean;
  isBlocked: boolean;
}
