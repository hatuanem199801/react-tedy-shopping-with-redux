import { FETCH_PRODUCTS } from "./index";

export const fetchProducts = () => dispatch => {
  dispatch({
    type: FETCH_PRODUCTS
  });
};
