import { combineReducers } from "redux";
import userReducer from "./Reducers/userReducer";


const reducer = combineReducers({
    users: userReducer
})

export default reducer;