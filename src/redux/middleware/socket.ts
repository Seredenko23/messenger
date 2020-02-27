import {Middleware} from "redux";
import io from "socket.io-client"

let socket: any = io('http://localhost');

export const socketMiddleware: Middleware = store => next => action => {
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

    let handleEvent: string | Function = handle;
    if (typeof handleEvent === 'string') {
      handleEvent = result => store.dispatch({ type: handle, payload: result, ...rest });
    }
    return socket.on(event, handleEvent);
  };
