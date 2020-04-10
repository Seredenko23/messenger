import {
  THREAD_ERROR,
  THREAD_PENDING,
  THREAD_SUCCESS,
  ADD_THREAD,
  CHANGE_CURRENT_THREAD, ADD_THREAD_SOCKET
} from "../actions/thread";

import { ThreadState } from "./types/ThreadState";
import { Reducer } from "redux";

const initialState: ThreadState = {
  isPending: false,
  currentThread: {},
  threads: []
};

export const threadReducer: Reducer<ThreadState> = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_THREAD:
      return {
        ...state,
        currentThread: action.payload
      };
    case THREAD_SUCCESS:
      return {
        ...state,
        isPending: action.payload.isPending,
        threads: action.payload.threads
      };
    case THREAD_PENDING:
      return {
        ...state,
        isPending: action.payload
      };
    case THREAD_ERROR:
      return {
        ...state,
        isPending: action.payload.isPending,
        error: action.payload.err
      };
    case ADD_THREAD:
      return {
        ...state,
        threads: [ ...state.threads, action.payload]
      };
    case ADD_THREAD_SOCKET:
      return {
        ...state,
        threads: [ ...state.threads, action.payload]
      }
    default:
      return state;
  }
};
