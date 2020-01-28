import { combineReducers } from "redux";
import { signUp } from "./sign-up";
import { websocket } from "./websocket";

const rootReducer = combineReducers({
  signUp,
  websocket
});

export default rootReducer;
