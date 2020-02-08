import React, { Component } from "react";
import Product from "../components/Product";
import { fetchProducts } from "../redux/actions/productAction";
import { addOrder } from "../redux/actions/orderAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  handleAddToCart = product => {
    this.props.addOrder(product);
    document.getElementById("Counter-Order").innerHTML++;
  };
  render() {
    const listProducts =
      this.props.data.length > 0 ? (
        this.props.data.map(product => (
          <Product
            key={product.id}
            onAddToCart={this.handleAddToCart}
            product={product}
          />
        ))
      ) : (
        <div>Loading ... </div>
      );

    return <div className="row">{listProducts}</div>;
  }
}

const mapStateToProps = state => ({
  data: state.product.items
});

const mapDispatchToProps = dispatch => ({
  addOrder: product => dispatch(addOrder(product)),
  fetchProducts: () => dispatch(fetchProducts())
});

Products.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
