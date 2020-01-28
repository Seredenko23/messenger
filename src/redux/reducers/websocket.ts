import {Reducer} from "redux";
import {WebsocketAction} from "../actions/types/WebsocketActions";
import {WebsocketState} from "./types/WebsocketState";

const initialState = {
  connected: false
};

export const websocket: Reducer<WebsocketState, WebsocketAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'WEBSOCKET:CONNECT':
      return {...state, connected: true};
    default:
      return state
  }
};
