import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataStore } from "../../DataStore";

function ProductCardCarrousel({ product }) {
  const { setClicked, setProductById } = useContext(DataStore);

  

  return (
    <div>
        <div className="card-product-grid mx-2">
      <Link
        onClick={() => {
          setClicked(product._id);
          setProductById(product);
        }}
        to={`/product/${product._id}`}
      >
          <div className="img-wrap">
            <img src={product.images[0]} />
          </div>
      </Link>
          <div className="info-wrap">
            <div className="price-wrap">
              <strong className="price">$ {product.price}</strong>
            </div>
            <div className="" style={{ height: "100px" }}>
              <h6 className="">{product.productNameWithCapacity}</h6>
            </div>
            <div className="d-flex justify-content-around">
              <a href="#" className="btn btn-yellow">
                Add to cart
              </a>
              <a href="#" className="btn btn-outline-dark btn-icon">
                <i className="fa fa-heart"></i>
              </a>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ProductCardCarrousel;
