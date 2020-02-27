import { combineReducers } from "redux";
import { signUp } from "./sign-up";
import {loginReducer} from "./LoginForm";
import { Socket } from "./socket";
import { threadReducer } from "./thread";

const rootReducer = combineReducers({
  signUp,
  Socket,
  loginReducer,
  threadReducer,
});

export default rootReducer;
