import { combineReducers } from "redux";
import { photosReducer } from "./photos";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  photos: photosReducer,
  users: userReducer,
});
