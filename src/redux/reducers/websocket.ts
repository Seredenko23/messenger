import { Reducer } from "redux";
import { WebsocketActions } from "../actions/types/WebsocketActions";
import { WebsocketState } from "./types/WebsocketState";

const initialState: WebsocketState = {
  connected: false
};

export const websocket: Reducer<WebsocketState, WebsocketActions> =
  (state = initialState, action: WebsocketActions) => {
  switch (action.type) {
    case 'WEBSOCKET:CONNECT':
      return {...state, connected: true};
    default:
      return state
  }
};
