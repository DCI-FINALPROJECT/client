import React from "react";

function CategoryFilter() {
  return (
    <div>
      <div id="aside_filter" className="collapse card d-lg-block mb-5">
        <article className="filter-group">
          <header className="card-header">
            <a
              href="#"
              className="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside_brands"
            >
              <i className="icon-control fa fa-chevron-down"></i> Brands
            </a>
          </header>
          <div className="collapse show" id="collapse_aside_brands">
            <div className="card-body">
              <label className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  checked=""
                />
                <span className="form-check-label"> Mercedes </span>
                <b className="badge rounded-pill bg-gray-dark float-end">120</b>
              </label>

              <label className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  checked=""
                />
                <span className="form-check-label"> Toyota </span>
                <b className="badge rounded-pill bg-gray-dark float-end">15</b>
              </label>

              <label className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  checked=""
                />
                <span className="form-check-label"> Mitsubishi </span>
                <b className="badge rounded-pill bg-gray-dark float-end">35</b>
              </label>

              <label className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  checked=""
                />
                <span className="form-check-label"> Nissan </span>
                <b className="badge rounded-pill bg-gray-dark float-end">89</b>
              </label>

              <label className="form-check mb-2">
                <input className="form-check-input" type="checkbox" value="" />
                <span className="form-check-label"> Honda </span>
                <b className="badge rounded-pill bg-gray-dark float-end">30</b>
              </label>

              <label className="form-check mb-2">
                <input className="form-check-input" type="checkbox" value="" />
                <span className="form-check-label"> Honda accord </span>
                <b className="badge rounded-pill bg-gray-dark float-end">30</b>
              </label>
            </div>
          </div>
        </article>

        <article className="filter-group">
          <header className="card-header">
            <a
              href="#"
              className="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside2"
            >
              <i className="icon-control fa fa-chevron-down"></i> Price
            </a>
          </header>
          <div className="collapse show" id="collapse_aside2">
            <div className="card-body">
              <input type="range" className="form-range" min="0" max="100" />
              <div className="row mb-3">
                <div className="col-6">
                  <label for="min" className="form-label">
                    Min
                  </label>
                  <input
                    className="form-control"
                    id="min"
                    placeholder="$0"
                    type="number"
                  />
                </div>

                <div className="col-6">
                  <label for="max" className="form-label">
                    Max
                  </label>
                  <input
                    className="form-control"
                    id="max"
                    placeholder="$1,0000"
                    type="number"
                  />
                </div>
              </div>
              <button className="btn btn-light w-100" type="button">
                Apply
              </button>
            </div>
          </div>
        </article>

        <article className="filter-group">
          <header className="card-header">
            <a
              href="#"
              className="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside3"
            >
              <i className="icon-control fa fa-chevron-down"></i> Size
            </a>
          </header>
          <div className="collapse show" id="collapse_aside3">
            <div className="card-body">
              <label className="checkbox-btn">
                <input type="checkbox" />
                <span className="btn btn-light"> XS </span>
              </label>

              <label className="checkbox-btn">
                <input type="checkbox" />
                <span className="btn btn-light"> SM </span>
              </label>

              <label className="checkbox-btn">
                <input type="checkbox" />
                <span className="btn btn-light"> LG </span>
              </label>

              <label className="checkbox-btn">
                <input type="checkbox" />
                <span className="btn btn-light"> XXL </span>
              </label>
            </div>
          </div>
        </article>

        <article className="filter-group">
          <header className="card-header">
            <a
              href="#"
              className="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside4"
            >
              <i className="icon-control fa fa-chevron-down"></i> Ratings
            </a>
          </header>
          <div className="collapse show" id="collapse_aside4">
            <div className="card-body">
              <label className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  checked=""
                />
                <span className="form-check-label">
                  <ul className="rating-stars">
                    <li className="stars-active" style={{width:"100%"}}>
                      <img src="images/misc/stars-active.svg" alt="" />
                    </li>
                    <li>
                      {" "}
                      <img src="images/misc/starts-disable.svg" alt="" />{" "}
                    </li>
                  </ul>
                </span>
              </label>
              <label className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  checked=""
                />
                <span className="form-check-label">
                  <ul className="rating-stars">
                    <li className="stars-active" style={{width:"80%"}}>
                      <img src="images/misc/stars-active.svg" alt="" />
                    </li>
                    <li>
                      {" "}
                      <img src="images/misc/starts-disable.svg" alt="" />{" "}
                    </li>
                  </ul>
                </span>
              </label>
              <label className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  checked=""
                />
                <span className="form-check-label">
                  <ul className="rating-stars">
                    <li className="stars-active" style={{width:"60%"}}>
                      <img src="images/misc/stars-active.svg" alt="" />
                    </li>
                    <li>
                      {" "}
                      <img src="images/misc/starts-disable.svg" alt="" />{" "}
                    </li>
                  </ul>
                </span>
              </label>
              <label className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  checked=""
                />
                <span className="form-check-label">
                  <ul className="rating-stars">
                    <li className="stars-active" style={{width:"40%"}}>
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
