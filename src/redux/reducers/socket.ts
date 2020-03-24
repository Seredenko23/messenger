import {
  ALL_MESSAGE,
  CLEAR_SEARCHABLE_USER,
  GET_SEARCHABLE_USER,
  GET_TYPING,
  NEW_MESSAGE, SET_IS_EMPTY,
  setIsEmpty
} from "../actions/socket";
import { Reducer} from "redux";
import { SocketActions } from "../actions/types/SocketActions";
import { SocketState } from "./types/SocketState";

const initialState: SocketState = {
  messages: [],
  searchableUsers: [],
  isTyping: false,
  isEmpty: true,
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
    case GET_SEARCHABLE_USER:
      return {...state, searchableUsers: action.payload};
    case CLEAR_SEARCHABLE_USER:
      return {...state, searchableUsers: []};
    case SET_IS_EMPTY:
      return {...state, isEmpty: action.payload};
    default:
      return state
  }
};
