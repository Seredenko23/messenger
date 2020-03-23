import {Action, ActionCreator, Dispatch} from "redux";
import {Thread} from "../../models/Thread";
import {getThreadByUserId, createThread} from "../../service/thread";

export const THREAD_PENDING: string = 'ACTION_REGISTER_PENDING';
export const ADD_THREAD: string = 'ACTION_ADD_THREAD';
export const THREAD_SUCCESS: string = 'ACTION_THREAD_SUCCESS';
export const THREAD_ERROR: string = 'ACTION_THREAD_ERROR';
export const CHANGE_CURRENT_THREAD: string = 'ACTION_CHANGE_CURRENT_THREAD';


const threadPending: ActionCreator<Action> = () => {
  return {
    type: THREAD_PENDING,
    payload: true,
  }
};

const threadSuccess: ActionCreator<Action> = (threads: Thread[]) => {
  return {
    type: THREAD_SUCCESS,
    payload: {
      isPending: false,
      threads: threads
    },
  }
};

const addThread: ActionCreator<Action> = (thread: Thread) => {
  return {
    type: ADD_THREAD,
    payload: {
      thread: thread
    }
  }
};

const threadError: ActionCreator<Action> = (error: string) => {
  return {
    type: THREAD_ERROR,
    payload: {
      isPending: false,
      error: error
    },
  }
};

export const changeCurrentThread: ActionCreator<Action> = (thread: Thread) => {
  return {
    type: CHANGE_CURRENT_THREAD,
    payload: {
      thread: thread
    }
  }
}

export const getThreads: (userId: string)
  => (dispatch: Dispatch)
  => void = (userId: string) => {
  return (dispatch: Dispatch) => {
    dispatch(threadPending());
    getThreadByUserId(userId)
      .then(threads => {
        dispatch(threadSuccess(threads));
      })
      .catch(err => {
        dispatch(threadError(err));
      })
  }
};

export const createNewThread: (currentUser: string, user: string)
  => (dispatch: Dispatch)
  => void = (currentUser: string, user: string) => {
  return (dispatch: Dispatch) => {
    createThread(currentUser, user)
      .then(thread => {
        dispatch(addThread(thread));
      })
      .catch(err => {
        dispatch(threadError(err));
      })
  }
};
