import { combineReducers } from "redux";
import watchReducer from "./watchReducers";
import brandReducer from "./brandReducers";

export default combineReducers({
  watches: watchReducer,
  brand: brandReducer,
});
