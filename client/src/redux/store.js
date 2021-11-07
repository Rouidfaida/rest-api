import {createStore,compose,applyMiddleware} from "redux";
import thunk from "redux-thunk"
import { listreducer } from "./listreducer";

let devtools= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store =createStore(listreducer,compose(applyMiddleware(thunk),devtools)) 