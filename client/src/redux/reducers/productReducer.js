import { FETCH_PRODUCTS } from "../actions";
import products from "../../mock/products";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: products
      };
    default:
      return state;
  }
}
