import { combineReducers } from "redux";
import OrderReducer from "./orderReducer";
import ProductReducer from "./productReducer";

export default combineReducers({
  orders: OrderReducer,
  product: ProductReducer
});
