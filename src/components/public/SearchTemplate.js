import React from "react";
import { Link } from "react-router-dom";

function SearchTemplate({ product }) {
  return (
    <div className="m-3" style={{ width: "15rem" }}>
      <Link to={`/product/${product._id}`}>
        <div className="card card-product-grid mx-2">
          <div className="img-wrap">
            <img src={product.images[0]} />
          </div>
          <div className="info-wrap border-top">
            <div className="price-wrap">
              <strong className="price">$ {product.price}</strong>
            </div>
            <div className="" style={{ height: "100px" }}>
              <h6 className="">{product.productName}</h6>
              <p className="title mb-2">{product.description}</p>
            </div>
            <div className="d-flex justify-content-around">
              <a href="#" className="btn btn-primary">
                Add to cart
              </a>
              <a href="#" className="btn btn-outline-primary btn-icon">
                <i className="fa fa-heart"></i>
              </a>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchTemplate;
