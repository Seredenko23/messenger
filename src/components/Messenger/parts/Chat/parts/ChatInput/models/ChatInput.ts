import {User} from "../../../../../../../models/user";
import {Message} from "../../../../../../../models/messages";
import {Thread} from "../../../../../../../models/Thread";

export interface ChatInputProps {
  currentThread: Thread;
  user: User;
  sendMessage: (message: Message) => void;
  setIsTyping: (isTyping: boolean) => void;
}

export interface ChatInputState {
  messageBody: string;
  isRecording: boolean;
  isBlocked: boolean;
  file: File | null;
}
