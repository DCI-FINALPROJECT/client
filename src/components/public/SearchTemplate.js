import React from "react";
import { Link } from "react-router-dom";

function SearchTemplate({ product }) {
  return (
    <div className="m-3" style={{ width: "15rem" }}>
        <div className="card card-product-grid mx-2">
      <Link to={`/product/${product._id}`}>
          <div className="img-wrap m-2">
            <img src={product.images[0]} />
          </div>
          <div className="info-wrap border-top">
            <div className="price-wrap">
              <strong className="price">$ {product.price}</strong>
            </div>
            <div className="" style={{ height: "70px" }}>
              <h6 className="">{product.productNameWithCapacity}</h6>
            </div>
          </div>
      </Link>
            <div className="d-flex justify-content-around mb-3">
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

export default SearchTemplate;
