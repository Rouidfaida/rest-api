import { combineReducers } from "redux";
import { reducerProduct, reducerUser } from "./reducer";

export const listreducer=combineReducers({
    alluser:reducerUser,
    allproduct:reducerProduct
})