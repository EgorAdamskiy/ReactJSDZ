import { combineReducers } from "redux";
import { theme, options } from "./reducers";

export const root = combineReducers({
  theme: theme,
  state: options,
});