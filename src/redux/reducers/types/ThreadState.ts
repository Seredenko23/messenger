import {Thread} from "../../../models/Thread";

export interface ThreadState {
  isPending: boolean;
  threadId: string;
  threads: Thread[];
}
