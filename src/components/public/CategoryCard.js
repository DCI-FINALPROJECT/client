import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function CategoryCard({ product }) {
  console.log("PRODUCT:", product);

  const query = new URLSearchParams(useLocation().search);

  const ratings = parseInt(query.get("ratings").substring(1));

  console.log(ratings);



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
      console.log(element);
      numberOfElement++;
      stars += element.star;
    });

    setAvarageStarPoints(stars / numberOfElement);
  };

  useEffect(getAvarageStarPoints, [reviews]);

  console.log("ASP:", avarageStarPoints);

  return (
    <article class="card card-product-list">

    {
      avarageStarPoints > 0 && <div class="row g-0">
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
              <a href="#" class="title h5">
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
                  <i className="dot">{avarageStarPoints.toFixed(0)}%</i>
                  <span className="label-rating text-muted">
                    <i className="fa fa-shopping-basket"></i>
                   {product.sales} orders
                  </span>
                  <i className="dot"></i>
                  <span className="label-rating text-success">verified</span>
                </div>
                <i class="dot"></i>
                <span class="label-rating text-muted">{product.sales}</span>
              </div>
              <p>
                {product.description}
                <div>Category: {product.category}</div>
                <div>Brand: {product.brand}</div>
              </p>
            </div>
          </Link>
        </div>
        <aside class="col-xl-3 col-md-3 col-sm-5">
          <div class="info-aside">
            <div class="price-wrap">
              <span class="price h5"> €{product.price} </span>
            </div>
            <p class="text-success">Free shipping</p>
            <br />
            <div class="mb-3">
              <a href="#" class="btn btn-primary">
                Buy this
              </a>
              <a href="#" class="btn btn-light btn-icon">
                <i class="fa fa-heart"></i>
              </a>
            </div>
          </div>
        </aside>
      </div>
    }

      
    </article>
  );
}

export default CategoryCard;
