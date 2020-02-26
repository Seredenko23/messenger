import {Thread} from "../../../models/Thread";

export interface ThreadState {
  isPending: boolean;
  threads: Thread[];
}
