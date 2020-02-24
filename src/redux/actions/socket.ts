import { ActionCreator } from "redux";
import { Message } from "../../models/messages";
import {SocketAction} from "./types/SocketActions";

export const NEW_MESSAGE: string = 'SOCKET:NEW_MESSAGE';

export const subscribeMessage: ActionCreator<SocketAction> = () => {
  return {
    event: "message",
    handle: NEW_MESSAGE
  }
};

export const unsubscribeMessage: ActionCreator<SocketAction> = () => {
  return {
    event: "message",
    leave: true
  }
};

export const sendMessage: ActionCreator<SocketAction> = (message: Message) => {
  return {
    event: "message",
    emit: true,
    payload: message
  }
};
