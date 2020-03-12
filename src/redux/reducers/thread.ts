import {
  THREAD_ERROR,
  THREAD_PENDING,
  THREAD_SUCCESS,
  ADD_THREAD, CHANGE_THREAD_ID
} from "../actions/thread";

import { ThreadState } from "./types/ThreadState";
import { Reducer } from "redux";

const initialState: ThreadState = {
  isPending: false,
  threadId: "",
  threads: []
};

export const threadReducer: Reducer<ThreadState> = (state = initialState, action) => {
  switch (action.type) {
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
        threads: [ ...state.threads, action.payload.thread ]
      };
    case CHANGE_THREAD_ID:
      return {
        ...state,
        threadId: action.payload.threadId
      };
    default:
      return state;
  }
};
