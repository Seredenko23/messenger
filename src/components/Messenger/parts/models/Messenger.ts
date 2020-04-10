import {User} from "../../../../models/user";

export interface MessengerProps {
  user: User;
  subscribeSearchableUser: () => void,
  subscribeNewThread: () => void,
  unsubscribeSearchableUser: () => void,
  unsubscribeNewThread: () => void
}
