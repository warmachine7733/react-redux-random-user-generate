import { Home } from "../container/Home/reducer";
import { Profile } from "../container/Profile/reducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({ Home, Profile });
export default rootReducer;
