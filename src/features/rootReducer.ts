import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import profileReducer from "./profile";

const rootReducer = combineReducers({
  profile: profileReducer,
  auth: authReducer,
});

export default rootReducer;
