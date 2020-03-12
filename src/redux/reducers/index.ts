import { combineReducers } from "redux";
import { signUp } from "./sign-up";
import { userReducer } from "./LoginForm";
import { Socket } from "./socket";
import { threadReducer } from "./thread";

const rootReducer = combineReducers({
  signUp,
  Socket,
  userReducer,
  threadReducer,
});

export default rootReducer;
