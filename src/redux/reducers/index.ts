import { combineReducers } from "redux";
import { signUp } from "./sign-up";
import {loginReducer} from "./LoginForm";
import { websocket } from "./websocket";

const rootReducer = combineReducers({
  signUp,
  websocket,
  loginReducer,
})

export default rootReducer;
