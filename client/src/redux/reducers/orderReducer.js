import {
  FECTH_ORDER,
  ADD_ORDER,
  REMOVE_ORDER,
  INCREMENT_ORDER,
  DECREMENT_ORDER,
  CHECK_OUT
} from "../actions";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  const orders = [...state.items];
  switch (action.type) {
    case FECTH_ORDER:
      return {
        ...state,
        items: JSON.parse(localStorage.getItem("orders")) || []
      };
    case ADD_ORDER:
      const isAdded = orders.some(
        order => order.product.id === action.payload.id
      );
      if (isAdded) {
        orders.forEach(order => {
          if (order.product.id === action.payload.id) {
            order.quantity += 1;
            return order;
          }
        });
      } else {
        orders.push({
          id: orders.length + 1,
          product: action.payload,
          quantity: 1
        });
      }
      localStorage.setItem("orders", JSON.stringify(orders));
      return {
        ...state,
        items: orders
      };
    case REMOVE_ORDER:
      return {
        ...state,
        items: action.payload
      };
    case INCREMENT_ORDER:
      if (orders.indexOf(action.payload) !== -1) {
        let index = orders.indexOf(action.payload);
        orders[index] = { ...action.payload };
        orders[index].quantity++;
        localStorage.setItem("orders", JSON.stringify(orders));
      }
      return {
        ...state,
        items: orders
      };
    case DECREMENT_ORDER:
      if (orders.indexOf(action.payload) !== -1) {
        let index = orders.indexOf(action.payload);
        orders[index] = { ...action.payload };
        if (orders[index].quantity > 1) {
          orders[index].quantity--;
        }
        localStorage.setItem("orders", JSON.stringify(orders));
      }
      return {
        ...state,
        items: orders
      };
    case CHECK_OUT:
      localStorage.setItem("orders", null);
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
}
