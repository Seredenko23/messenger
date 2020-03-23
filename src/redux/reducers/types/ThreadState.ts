import {Thread} from "../../../models/Thread";

export interface ThreadState {
  isPending: boolean;
  currentThread: Thread | {};
  threads: Thread[];
}
