import React from "react";

function ProductCardCarrousel() {
  return (
    <div>
      <div className="card card-product-grid">
        <div className="img-wrap">
          <img src="../images/items/13.jpg" />
        </div>
        <div className="info-wrap border-top">
          <div className="price-wrap">
            <strong className="price">$120.00</strong>
          </div>
          <p className="title mb-2">
            T-shirts with multiple colors, for men and lady - unisex
          </p>
          <a href="#" className="btn btn-primary">
            Add to cart
          </a>
          <a href="#" className="btn btn-outline-primary btn-icon">
            <i className="fa fa-heart"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCardCarrousel;
