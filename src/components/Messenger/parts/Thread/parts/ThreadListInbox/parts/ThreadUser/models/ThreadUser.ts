import {User} from "../../../../../../../../../models/user";
import {Thread} from "../../../../../../../../../models/Thread";

export interface ThreadUserProps {
  user: User;
  getAllMessage: (thread: Thread) => void;
  thread: Thread;
  className: string;
}
