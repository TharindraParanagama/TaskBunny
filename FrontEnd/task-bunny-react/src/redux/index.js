import { combineReducers } from "redux";
import LoginReducer from "./reducers/LoginReducerinReducer";

const allReducers = combineReducers({
  //users: UserReducer,
  //activeUser: ActiveUserReducer
  isLoggedIn: LoginReducer,
});

export default allReducers;
