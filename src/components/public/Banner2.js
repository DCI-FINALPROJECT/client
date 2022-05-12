import React from "react";
import { Link } from "react-router-dom";

function Banner2() {
  return (
    <div>
      <div>
        <div className="container">
          <div class="row gy-3">
            <div class="col-lg-8">
              <div
                class="card-banner img1 mb-3 hvr"
                style={{ minHeight: "230px" }}
              >
                <div class="caption">
                  <h3 class="card-title text-white">Smartphones</h3>
                  <p class="card-text text-white" style={{ maxWidth: "400px" }}>
                    No matter how far along you are in your sophistication as an
                    amateur astronomer, there is always one.
                  </p>
                  <a href="" class="btn btn-yellow">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-3">
              <Link to={"/giftcard"}>
                <div
                  class="card-banner img2 hvr"
                  style={{ minHeight: "230px" }}
                >
                  <div class="caption top">
                    <h5 class="card-title text-white">Gift Card</h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
