import { combineReducers } from "redux";
import user from "./auth/userSlice";
import session from './auth/sessionSlice'


export const rootReducer = combineReducers({
    user,
    session
});