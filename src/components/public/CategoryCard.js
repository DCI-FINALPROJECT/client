import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function CategoryCard({ product }) {

  const query = new URLSearchParams(useLocation().search);


  const [reviews, setReviews] = useState([]);
  const [avarageStarPoints, setAvarageStarPoints] = useState(0);

  const getProductStars = () => {
    const productName = product.productName;

    fetch(`http://localhost:5000/review/${productName}`)
      .then((data) => data.json())
      .then((data) => setReviews(data));
  };

  useEffect(getProductStars, []);

  const getAvarageStarPoints = () => {
    let stars = 0;
    let numberOfElement = 0;

    reviews.forEach((element, index) => {
      numberOfElement++;
      stars += element.star;
    });

    setAvarageStarPoints(stars / numberOfElement);
  };

  useEffect(getAvarageStarPoints, [reviews]);



  return (
    <article class="card card-product-list">
      
        <div class="row g-0">
          <aside class="col-xl-3 col-md-4">
            <Link to={`/product/${product._id}`}>
              <a href="#" class="img-wrap">
                <img src={product.images[0]} />
              </a>
            </Link>
          </aside>

          <div class="col-xl-6 col-md-5 col-sm-7">
            <Link to={`/product/${product._id}`}>
              <div class="card-body">
                <a href="#" class="h5 black hover">
                  {product.productNameWithCapacity}
                </a>

                <div class="rating-wrap mb-2">
                  <ul class="rating-stars">
                    <li class="stars-active" style={{ width: "90%" }}>
                      <img src="images/misc/stars-active.svg" alt="" />
                    </li>
                    <li>
                      <img src="images/misc/starts-disable.svg" alt="" />
                    </li>
                  </ul>
                  <div className="rating-wrap" bis_skin_checked="1">
                    <ul className="rating-stars">
                      <li
                        style={{ width: `${avarageStarPoints}%` }}
                        className="stars-active"
                      >
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                    <i className="dot black p-1">{avarageStarPoints.toFixed(0) === "NaN" ? 0 : avarageStarPoints.toFixed(0)}%</i>
                    <span className="label-rating text-muted">
                      <i className="fa fa-shopping-basket"></i>
                      {product.sales} orders
                    </span>
                    <i className="dot"></i>
                  </div>
                  <i class="dot"></i>
                  <span class="label-rating text-muted">{product.sales}</span>
                </div>
                <p className="black" style={{textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden"}}>
                  {product.description}
                  <div>Category: {product.category}</div>
                  <div>Brand: {product.brand}</div>
                </p>
              </div>
            </Link>
          </div>
          <aside class="col-xl-3 col-md-3 col-sm-5">
            <div class="info-aside d-flex flex-column align-items-end">
              <div class="price-wrap">
                <span class="price h5"> € {product.price} </span>
              </div>
              <p class="yellow">Free shipping</p>
              <br />
              
            </div>
          </aside>
        </div>
      
    </article>
  );
}

export default CategoryCard;
