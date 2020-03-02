import { combineReducers } from "redux";

import Session from "./reduser/session";
import User from "./reduser/user";

const rootReducer = combineReducers({
  Session,
  User
});

export default rootReducer;
