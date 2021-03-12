import { combineReducers, createStore } from "redux";
import counterreducer from "./reducers/counter";

const combineall = combineReducers({ counter: counterreducer });

const store = createStore(combineall);

export default store;
