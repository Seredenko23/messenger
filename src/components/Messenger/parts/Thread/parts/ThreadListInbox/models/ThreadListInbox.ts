import {User} from "../../../../../../../models/user";
import {Thread} from "../../../../../../../models/Thread";

export interface ThreadListInboxProps {
  subscribeSearchableUser: () => void;
  getThreads: (string) => void;
  user: User;
  threads: Thread[];
  currentThread: Thread;
  searchableUsers: User[];
  isEmpty: boolean;
}
