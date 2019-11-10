import React from "react";
import PropTypes from "prop-types";

const Product = ({ product, onAddToCart }) => (
  <div className="col-6 col-sm-4 col-md-3">
    <div className="card m-1 p-0 border-0 ">
      <div className="text-center">
        <img
          style={{ width: 150, height: 200 }}
          src={product.image}
          className="card-img-top img-fluid border-0"
          alt={product.title}
        />
        <div className="card-body m-1 p-1 text-left">
          <h6 className="card-title pb-2 m-0">{product.title}</h6>
          <p className="text-danger p-0 m-0">{product.price}</p>
          <div className="mt-1">
            <button
              onClick={() => onAddToCart(product)}
              className="badge badge-danger border-0 p-1"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default Product;
