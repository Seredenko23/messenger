import {User} from "../../../../../../../../../models/user";

export interface SearchedUserProps {
  createNewThread: (currentUser: string, user:string) => void;
  searchedUser: User;
  setIsEmpty: (isEmpty: boolean) => void;
  user: User;
  getThreads: (userId: string) => void
}
