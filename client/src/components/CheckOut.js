import React from "react";

const CheckOut = ({ total, onCheckOut }) => {
  return (
    <div className="shadow-sm p-2">
      <h5>Total order</h5>
      <p className="text-danger font-weight-bold">{total}</p>
      <div className="text-center">
        <button onClick={() => onCheckOut()} className="btn btn-warning">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
