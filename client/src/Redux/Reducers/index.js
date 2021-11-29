import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { postReducer } from "./postReducer";
import { pubReducer } from "./pubReducer";

export const rootReducer = combineReducers({
  userReducer,
  postReducer,
  pubReducer,
});
