import React from 'react'
import { Link } from 'react-router-dom';

function CategoryCard({product}) {


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
          <a href="#" class="title h5">
            {product.productName}
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
            <span class="label-rating text-warning">4.5</span>
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
  </article>
  )
}

export default CategoryCard