import React from 'react'
import {useContext,useState} from "react";
import { DataStore } from '../../DataStore';

function ProductCard() {

  // ProductById is for ProductCard come from App.js via useContext
  const {productById} = useContext(DataStore);


  // This state is for selected image.
  const [image,setImage] = useState(0)


  return (
    <div>

        {/* product */}
      <div>
        <section class="padding-y bg-white shadow-sm">
          <div class="container" bis_skin_checked="1">
            <div class="row" bis_skin_checked="1">
              <aside class="col-lg-6">
                <article class="gallery-wrap">
                  <div class="img-big-wrap img-thumbnail" bis_skin_checked="1">
                    <a href="/">
                      <img src={productById.images[image]} />
                    </a>
                  </div>
                  <div class="thumbs-wrap" bis_skin_checked="1">
                    <a  class="item-thumb">
                      <img onClick={()=>setImage(1)} src={productById.images[1]} />
                    </a>
                    <a href="#" class="item-thumb">
                      <img onClick={()=>setImage(2)} src={productById.images[2]} />
                    </a>
                    <a href="#" class="item-thumb">
                      <img onClick={()=>setImage(3)} src={productById.images[3]} />
                    </a>
                  </div>
                </article>
              </aside>
              <div class="col-lg-6" bis_skin_checked="1">
                <article class="ps-lg-3">
                  <h4 class="title text-dark">
                    {productById.productName}
                  </h4>
                  <div class="rating-wrap my-3" bis_skin_checked="1">
                    <ul class="rating-stars">
                      <li style={{ width: "80%" }} class="stars-active">
                        <img src="images/misc/stars-active.svg" alt="" />
                      </li>
                      <li>
                        <img
                          height="520"
                          src="images/misc/starts-disable.svg"
                          alt=""
                        />
                      </li>
                    </ul>
                    <b class="label-rating text-warning"> {productById.stars}</b>
                    <i class="dot"></i>
                    <span class="label-rating text-muted">
                      <i class="fa fa-shopping-basket"></i> 154 orders
                    </span>
                    <i class="dot"></i>
                    <span class="label-rating text-success">Verified</span>
                  </div>
                  <div class="mb-3" bis_skin_checked="1">
                    <var class="price h5">{productById.price}</var>
                    <span class="text-muted"> €</span>
                  </div>
                  <p>
                    {productById.description}
                  </p>
                  <dl class="row">
                    <dt class="col-3">Model</dt>
                    <dd class="col-9">{productById.productName}</dd>
                    <dt class="col-3">Color</dt> <dd class="col-9">{}</dd>
                    <dt class="col-3">Material</dt>
                    <dd class="col-9">Cotton, Jeans </dd>
                    <dt class="col-3">Delivery</dt>
                    <dd class="col-9">Russia, USA, and Europe </dd>
                  </dl>
                  <hr />
                  <div class="row" bis_skin_checked="1">
                    <div class="col-md-3 mb-3" bis_skin_checked="1">
                      <select class="form-select">
                        <option selected="">Select size</option>
                        <option>Small</option> <option>Medium</option>
                        <option>Large</option>
                      </select>
                    </div>
                    <div class="col-md mb-3" bis_skin_checked="1">
                      <div class="mt-2" bis_skin_checked="1">
                        <label class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="choose_11"
                            value="option1"
                          />
                          <span class="form-check-label">Red</span>
                        </label>
                        <label class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="choose_11"
                            value="option1"
                          />
                          <span class="form-check-label">Green</span>
                        </label>
                        <label class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="choose_11"
                            value="option1"
                          />
                          <span class="form-check-label">Blue</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <a href="/" class="btn btn-warning">
                    Buy now
                  </a>
                  <a href="/" class="btn btn-primary">
                    <i class="me-2 fa fa-shopping-basket"></i> Add to cart
                  </a>
                  <a href="/" class="btn btn-light">
                    <i class="me-2 fa fa-heart"></i> Save
                  </a>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductCard