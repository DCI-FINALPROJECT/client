import React from "react";
import { Link } from "react-router-dom";

function ProductInfo({ product }) {
  return (
    <section className="section-pagetop bg-light">
      <div className="container">
        <nav>
          <ol className="breadcrumb text-white">
            <li className="breadcrumb-item">
              <a href="/">Homepage</a>
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
