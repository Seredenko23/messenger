import {ALL_MESSAGE, GET_TYPING, NEW_MESSAGE} from "../actions/socket";
import { Reducer} from "redux";
import { SocketActions } from "../actions/types/SocketActions";
import { SocketState } from "./types/SocketState";

const initialState: SocketState = {
  messages: [],
  isTyping: false
};

export const Socket: Reducer<SocketState, SocketActions> =
  (state = initialState, action: any) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return {...state, messages: [ ...state.messages, action.payload ]};
    case ALL_MESSAGE:
      return {...state, messages: [ ...action.payload ]};
    case GET_TYPING:
      return {...state, isTyping: action.payload};
    default:
      return state
  }
};
