import {MessageBody} from "../../../../../../../../../models/MessageBody";

export interface MessageProps {
  name: string;
  type?: string;
  messageBody: MessageBody;
  createdAt: string;
}

