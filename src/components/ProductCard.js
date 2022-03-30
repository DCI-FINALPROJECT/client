import React from 'react'

function ProductCard() {
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
                      <img src="images/items/11.jpg" />
                    </a>
                  </div>
                  <div class="thumbs-wrap" bis_skin_checked="1">
                    <a href="/" class="item-thumb">
                      <img src="images/items/11.jpg" />
                    </a>
                    <a href="/" class="item-thumb">
                      <img src="images/items/11.jpg" />
                    </a>
                    <a href="/" class="item-thumb">
                      <img src="images/items/11.jpg" />
                    </a>
                  </div>
                </article>
              </aside>
              <div class="col-lg-6" bis_skin_checked="1">
                <article class="ps-lg-3">
                  <h4 class="title text-dark">
                    Sweater Men New Arrival Casual Pullover <br /> Men Long
                    Sleeve
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
                    <b class="label-rating text-warning"> 4.5</b>
                    <i class="dot"></i>
                    <span class="label-rating text-muted">
                      <i class="fa fa-shopping-basket"></i> 154 orders
                    </span>
                    <i class="dot"></i>
                    <span class="label-rating text-success">Verified</span>
                  </div>
                  <div class="mb-3" bis_skin_checked="1">
                    <var class="price h5">$815.00</var>
                    <span class="text-muted">/per kg</span>
                  </div>
                  <p>
                    Made of pure cotton Off-White is a streetwear-inspired
                    collection that continues to break away from the conventions
                    of divstream fashion. Made in Italy, these black and brown
                    Odsy-1000 low-top sneakers.
                  </p>
                  <dl class="row">
                    <dt class="col-3">Model/</dt>
                    <dd class="col-9">Hugo Boss</dd>
                    <dt class="col-3">Color</dt> <dd class="col-9">Brown</dd>
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