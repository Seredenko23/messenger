import {Action, ActionCreator, Dispatch} from "redux";
import { Message } from "../../models/messages";
import {SocketAction} from "./types/SocketActions";
import {getMessageByThreadId} from "../../service/messages";
import {changeThreadId} from "./thread";

export const NEW_MESSAGE: string = 'SOCKET:NEW_MESSAGE';
export const GET_TYPING: string = 'SOCKET:GET_TYPING';
export const ALL_MESSAGE: string = 'ALL_MESSAGE_ACTION';
export const GET_SEARCHABLE_USER: string = 'SOCKET:GET_SEARCHABLE_USER';
export const CLEAR_SEARCHABLE_USER: string = 'SOCKET:CLEAR_SEARCHABLE_USER';

export const subscribeMessage: ActionCreator<SocketAction> = () => {
  return {
    event: "message",
    handle: NEW_MESSAGE
  }
};

export const subscribeSearchableUser: ActionCreator<SocketAction> = () => {
  return {
    event: "search",
    handle: GET_SEARCHABLE_USER
  }
};

export const subscribeIsTyping: ActionCreator<SocketAction> = () => {
  return {
    event: "typing",
    handle: GET_TYPING
  }
}

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

export const allMessage: ActionCreator<Action> = (messages: Message[]) => {
  return {
    type: ALL_MESSAGE,
    payload: messages
  }
}

export const changeRoom: ActionCreator<SocketAction> = (threadId: string) => {
  return {
    event: "join",
    emit: true,
    payload: threadId,
  }
}

export const setIsTyping: ActionCreator<SocketAction> = (isTyping: boolean) => {
  console.log(isTyping)
  return {
    event: 'typing',
    emit: true,
    payload: isTyping
  }
}

export const getSearchableUser: ActionCreator<SocketAction> = (searchStr) => {
  return {
    event: "search",
    emit: true,
    payload: searchStr
  }
};

export const clearSearchableUser: ActionCreator<Action> = () => {
  return {
    type: CLEAR_SEARCHABLE_USER,
  }
}

export const getAllMessage: (threadId: string)
  => (dispatch: Dispatch)
  => void = (threadId: string) => {
  return (dispatch: Dispatch) => {
    getMessageByThreadId(threadId)
      .then((messages) => {
        dispatch(allMessage(messages));
        dispatch(changeThreadId(threadId));
        // @ts-ignore
        dispatch(changeRoom(threadId));
      })
  }
};
