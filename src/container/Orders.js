import React, { Component } from "react";
import Order from "../components/Order";
import { Link } from "react-router-dom";
import CheckOut from "../components/CheckOut";
import { connect } from "react-redux";
import {
  fetchOrder,
  removeOrder,
  decrementOrder,
  incrementOrder,
  checkOut
} from "../redux/actions/orderAction";

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrder();
  }

  handleIncrementOrder = order => {
    this.props.incrementOrder(order);
    document.getElementById("Counter-Order").innerHTML++;
  };

  handleDecrementOrder = order => {
    this.props.decrementOrder(order);
    const orders = [...this.props.data];
    const index = orders.indexOf(order);
    if (orders[index].quantity > 1) {
      document.getElementById("Counter-Order").innerHTML--;
    }
  };

  handleDeleteOrder = orderId => {
    this.props.removeOrder(orderId);
    const newOrders = this.props.data.filter(order => order.id !== orderId);
    const counterOrder = newOrders.reduce(
      (total, order) => total + order.quantity,
      0
    );
    document.getElementById("Counter-Order").innerHTML = counterOrder;
  };

  handleCheckout = () => {
    document.getElementById("Counter-Order").innerHTML = 0;
    this.props.checkOut();
  };

  totalPrice() {
    return this.props.data.reduce(
      (total, order) => total + order.quantity * order.product.price,
      0
    );
  }

  render() {
    const listOrders =
      this.props.data.length > 0 ? (
        <div>
          <h1>Your cart</h1>
          {this.props.data.map(order => (
            <Order
              onIncrement={this.handleIncrementOrder}
              onDecrement={this.handleDecrementOrder}
              onDelete={this.handleDeleteOrder}
              key={order.id}
              order={order}
            />
          ))}
        </div>
      ) : (
        <div>Loading ...</div>
      );
    const nothingOrder = (
      <div>
        <h2>Nothing order</h2>
        <hr />
        <Link to="/" className="text-primary">
          Back to home page
        </Link>
      </div>
    );
    return (
      <div className="row">
        <div className="col-6 col-sm-9 col-md-9">
          {this.props.data.length > 0 ? listOrders : nothingOrder}
        </div>
        <div className="col-6 col-sm-3 col-md-3">
          <CheckOut
            total={this.totalPrice()}
            onCheckOut={this.handleCheckout}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.orders.items
});

const mapDispatchToProps = dispatch => ({
  fetchOrder: () => dispatch(fetchOrder()),
  removeOrder: orderId => dispatch(removeOrder(orderId)),
  incrementOrder: order => dispatch(incrementOrder(order)),
  decrementOrder: order => dispatch(decrementOrder(order)),
  checkOut: () => dispatch(checkOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
