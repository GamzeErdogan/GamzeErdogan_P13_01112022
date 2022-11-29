import { combineReducers } from "redux";
import userLoginReducer from "./userLoginReducer";
import userProfileReducer from "./userProfileReducer";
import userEditProfileReducer from "./userEditReducer";

const allReducers = combineReducers({
    userLoginReducer: userLoginReducer,
    userProfileReducer:userProfileReducer,
    userEditProfileReducer : userEditProfileReducer
});
export default allReducers;
