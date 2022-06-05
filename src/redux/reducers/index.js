import { combineReducers } from "redux";
import countReducer from "./count";

import personReducer from "./person";
export const allReducer = combineReducers({ countReducer, personReducer });