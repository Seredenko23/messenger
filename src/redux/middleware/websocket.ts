import {Middleware} from "redux";

let websocket: WebSocket;

export const websocketMiddleware: Middleware = store => next => action => {
  switch (action.type) {
    case 'WEBSOCKET:CONNECT':
      websocket = new WebSocket(action.payload.url);

      websocket.onopen = () => store.dispatch({ type: 'WEBSOCKET:OPEN' });
      websocket.onclose = (event: Event) => store.dispatch({ type: 'WEBSOCKET:CLOSE', payload: event });
      websocket.onmessage = (event: Event) => store.dispatch({ type: 'WEBSOCKET:MESSAGE', payload: event });

      break;
    case 'WEBSOCKET:SEND':
      websocket.send(JSON.stringify(action.payload));
      break;

    case 'WEBSOCKET:DISCONNECT':
      websocket.close();
      break;

    default:
      break;
  }
  return next(action);
};
