import {Thread} from "../../../../../../../models/Thread";
import {User} from "../../../../../../../models/user";

export interface ChatInfoProps {
  currentThread: Thread,
  isPending: boolean,
  user: User,
}
