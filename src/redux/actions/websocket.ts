import {Action, ActionCreator} from "redux";

export const WEBSOCKET_CONNECT: string = 'WEBSOCKET:CONNECT';

export const connectWebsocket: ActionCreator<Action> = (url: string) => {
  return {
    type: WEBSOCKET_CONNECT,
    payload: { url },
  }
};
