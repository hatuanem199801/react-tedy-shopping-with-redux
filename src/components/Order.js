import React from "react";
import PropTypes from "prop-types";

function Order({ order, onIncrement, onDecrement, onDelete }) {
  return (
    <div className="alert" role="alert">
      <div className="">
        <img
          style={{
            marginRight: 20,
            width: 150
          }}
          src={order.product.image}
          className="img-fluid"
          alt={order.product.title}
        />
      </div>
      <h4>{order.product.title}</h4>
      <span>
        Price : <span className="text-danger">{order.product.price}</span>
      </span>
      <div>
        <button
          onClick={() => onDecrement(order)}
          className="btn btn-dark btn-sm p-2"
        >
          -
        </button>
        <span className="badge badge-warning p-2 m-2">{order.quantity}</span>
        <button
          onClick={() => onIncrement(order)}
          className="btn btn-dark btn-sm p-2"
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => onDelete(order.id)}
          className="btn btn-link pl-0"
        >
          Delete
        </button>
      </div>
      <hr />
    </div>
  );
}

Order.propTypes = {
  order: PropTypes.object.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Order;
