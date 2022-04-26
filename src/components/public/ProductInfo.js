import React from "react";
import { Link } from "react-router-dom";

function ProductInfo({ product }) {
  return (
    <section className="container section-pagetop bg-light" style={{padding:"10px 0", borderRadius:"5px"}}>
      <div className="container">
        <nav>
          <ol className="breadcrumb text-white">
            <li className="breadcrumb-item">
              <a href="/"><i className="fa fa-lg fa-home mx-2"></i>Homepage</a>
            </li>
            <li className="breadcrumb-item">
              <Link
                to={`/category/${product.category}?whichPage=1&choise=&brands=&min=&max=&capacities=`}
              >
                {product.category}
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {product.productName}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}

export default ProductInfo;
