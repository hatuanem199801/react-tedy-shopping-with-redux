import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const counterOrder = orders.reduce(
    (total, order) => total + order.quantity,
    0
  );
  return (
    <nav className="navbar navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Tedy Shopping
        </Link>
        <Link className="Orders" to="/orders">
          Orders{" "}
          <span className="badge badge-danger" id="Counter-Order">
            {counterOrder}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
