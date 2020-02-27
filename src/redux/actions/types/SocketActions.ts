import {Message} from "../../../models/messages";

export interface SocketAction {
  event: string;
  leave?: boolean;
  emit?: boolean;
  handle?: string;
  payload?: object;
}

export interface ISocketMessage {
  type: string;
  payload: Message
}

export interface IAllMessage {
  type: string;
  payload: Message[]
}

export type SocketActions = ISocketMessage | IAllMessage;
