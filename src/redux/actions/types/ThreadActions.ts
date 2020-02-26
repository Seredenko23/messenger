import {Thread} from "../../../models/Thread";

export interface IThreadPending {
  type: string;
  payload: boolean;
}

export interface IThreadSuccess {
  type: string;
  payload: {
    isPending: boolean;
    threads: Thread[];
  };
}

export interface IThreadError {
  type: string;
  payload: {
    isPending: boolean;
    error: Error;
  };
}

export interface IAddThread {
  type: string;
  payload: {
    thread: Thread;
  };
}

export type RegisterActions = IThreadPending
  | IThreadSuccess
  | IThreadError
  | IAddThread;
