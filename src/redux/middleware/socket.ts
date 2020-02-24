import {Middleware} from "redux";
import io from "socket.io-client"
import Socket = SocketIOClient.Socket;

export const socketMiddleware: Middleware = () => {
  let socket: Socket = io();

  return store => next => action => {
    if (typeof action === 'function') return next(action);

    const {
      event,
      leave,
      handle,
      emit,
      payload,
      ...rest
    } = action;

    if (!event) return next(action);

    if (emit) {
      socket.emit(event, payload);
      return;
    }

    if (leave) socket.off(event);

    let handleEvent = handle;
    if (typeof handleEvent === 'string') {
      // @ts-ignore
      handleEvent = result => store.dispatch({ type: handle, payload: result, ...rest });
    }
    return socket.on(event, handleEvent);
  };
};
