import {
  ADD_ORDER,
  REMOVE_ORDER,
  FECTH_ORDER,
  INCREMENT_ORDER,
  DECREMENT_ORDER,
  CHECK_OUT
} from "./index";

export const fetchOrder = () => dispatch => {
  dispatch({
    type: FECTH_ORDER
  });
};

export const addOrder = product => dispatch => {
  dispatch({
    type: ADD_ORDER,
    payload: product
  });
};

export const removeOrder = orderId => dispatch => {
  dispatch({
    type: REMOVE_ORDER,
    payload: orderId
  });
};

export const incrementOrder = order => dispatch => {
  dispatch({
    type: INCREMENT_ORDER,
    payload: order
  });
};

export const decrementOrder = order => dispatch => {
  dispatch({
    type: DECREMENT_ORDER,
    payload: order
  });
};

export const checkOut = () => dispatch => {
  dispatch({
    type: CHECK_OUT
  });
};
