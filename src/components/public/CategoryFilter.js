import React from "react";

function CategoryFilter() {
  return (
    <div>
      <div id="aside_filter" class="collapse card d-lg-block mb-5">
        <article class="filter-group">
          <header class="card-header">
            <a
              href="#"
              class="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside_brands"
            >
              <i class="icon-control fa fa-chevron-down"></i> Brands
            </a>
          </header>
          <div class="collapse show" id="collapse_aside_brands">
            <div class="card-body">
              <label class="form-check mb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  checked=""
                />
                <span class="form-check-label"> Mercedes </span>
                <b class="badge rounded-pill bg-gray-dark float-end">120</b>
              </label>

              <label class="form-check mb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  checked=""
                />
                <span class="form-check-label"> Toyota </span>
                <b class="badge rounded-pill bg-gray-dark float-end">15</b>
              </label>

              <label class="form-check mb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  checked=""
                />
                <span class="form-check-label"> Mitsubishi </span>
                <b class="badge rounded-pill bg-gray-dark float-end">35</b>
              </label>

              <label class="form-check mb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  checked=""
                />
                <span class="form-check-label"> Nissan </span>
                <b class="badge rounded-pill bg-gray-dark float-end">89</b>
              </label>

              <label class="form-check mb-2">
                <input class="form-check-input" type="checkbox" value="" />
                <span class="form-check-label"> Honda </span>
                <b class="badge rounded-pill bg-gray-dark float-end">30</b>
              </label>

              <label class="form-check mb-2">
                <input class="form-check-input" type="checkbox" value="" />
                <span class="form-check-label"> Honda accord </span>
                <b class="badge rounded-pill bg-gray-dark float-end">30</b>
              </label>
            </div>
          </div>
        </article>

        <article class="filter-group">
          <header class="card-header">
            <a
              href="#"
              class="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside2"
            >
              <i class="icon-control fa fa-chevron-down"></i> Price
            </a>
          </header>
          <div class="collapse show" id="collapse_aside2">
            <div class="card-body">
              <input type="range" class="form-range" min="0" max="100" />
              <div class="row mb-3">
                <div class="col-6">
                  <label for="min" class="form-label">
                    Min
                  </label>
                  <input
                    class="form-control"
                    id="min"
                    placeholder="$0"
                    type="number"
                  />
                </div>

                <div class="col-6">
                  <label for="max" class="form-label">
                    Max
                  </label>
                  <input
                    class="form-control"
                    id="max"
                    placeholder="$1,0000"
                    type="number"
                  />
                </div>
              </div>
              <button class="btn btn-light w-100" type="button">
                Apply
              </button>
            </div>
          </div>
        </article>

        <article class="filter-group">
          <header class="card-header">
            <a
              href="#"
              class="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside3"
            >
              <i class="icon-control fa fa-chevron-down"></i> Size
            </a>
          </header>
          <div class="collapse show" id="collapse_aside3">
            <div class="card-body">
              <label class="checkbox-btn">
                <input type="checkbox" />
                <span class="btn btn-light"> XS </span>
              </label>

              <label class="checkbox-btn">
                <input type="checkbox" />
                <span class="btn btn-light"> SM </span>
              </label>

              <label class="checkbox-btn">
                <input type="checkbox" />
                <span class="btn btn-light"> LG </span>
              </label>

              <label class="checkbox-btn">
                <input type="checkbox" />
                <span class="btn btn-light"> XXL </span>
              </label>
            </div>
          </div>
        </article>

        <article class="filter-group">
          <header class="card-header">
            <a
              href="#"
              class="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside4"
            >
              <i class="icon-control fa fa-chevron-down"></i> Ratings
            </a>
          </header>
          <div class="collapse show" id="collapse_aside4">
            <div class="card-body">
              <label class="form-check mb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  checked=""
                />
                <span class="form-check-label">
                  <ul class="rating-stars">
                    <li class="stars-active" style={{width:"100%"}}>
                      <img src="images/misc/stars-active.svg" alt="" />
                    </li>
                    <li>
                      {" "}
                      <img src="images/misc/starts-disable.svg" alt="" />{" "}
                    </li>
                  </ul>
                </span>
              </label>
              <label class="form-check mb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  checked=""
                />
                <span class="form-check-label">
                  <ul class="rating-stars">
                    <li class="stars-active" style={{width:"80%"}}>
                      <img src="images/misc/stars-active.svg" alt="" />
                    </li>
                    <li>
                      {" "}
                      <img src="images/misc/starts-disable.svg" alt="" />{" "}
                    </li>
                  </ul>
                </span>
              </label>
              <label class="form-check mb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  checked=""
                />
                <span class="form-check-label">
                  <ul class="rating-stars">
                    <li class="stars-active" style={{width:"60%"}}>
                      <img src="images/misc/stars-active.svg" alt="" />
                    </li>
                    <li>
                      {" "}
                      <img src="images/misc/starts-disable.svg" alt="" />{" "}
                    </li>
                  </ul>
                </span>
              </label>
              <label class="form-check mb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  checked=""
                />
                <span class="form-check-label">
                  <ul class="rating-stars">
                    <li class="stars-active" style={{width:"40%"}}>
                      <img src="images/misc/stars-active.svg" alt="" />
                    </li>
                    <li>
                      {" "}
                      <img src="images/misc/starts-disable.svg" alt="" />{" "}
                    </li>
                  </ul>
                </span>
              </label>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default CategoryFilter;
