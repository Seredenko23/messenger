import { NEW_MESSAGE } from "../actions/socket";
import { Reducer } from "redux";
import { SocketActions } from "../actions/types/SocketActions";
import { SocketState } from "./types/SocketState";

const initialState: SocketState = {
  messages: [],
};

export const Socket: Reducer<SocketState, SocketActions> =
  (state = initialState, action: SocketActions) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return {...state, messages: [ ...state.messages, action.payload ]};
    default:
      return state
  }
};
