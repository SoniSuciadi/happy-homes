import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";


const reducer = combineReducers({ productReducer });
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
