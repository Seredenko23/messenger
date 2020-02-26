import { combineReducers } from "redux";
import { signUp } from "./sign-up";
import {loginReducer} from "./LoginForm";
import { websocket } from "./websocket";
import { threadReducer } from "./thread";

const rootReducer = combineReducers({
  signUp,
  websocket,
  loginReducer,
  threadReducer,
});

export default rootReducer;
