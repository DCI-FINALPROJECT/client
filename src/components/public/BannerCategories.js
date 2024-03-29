import React from "react";
import { Link } from "react-router-dom";

function BannerCategories() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-3">
          <Link to={"category/IPHONE?whichPage=1&choise=1&brands=&min=0&max=0&capacities="}>
            <div
              className="card-banner align-items-end img-apple hvr"
              style={{ height: "250px" }}
            >
              <article className="caption botton">
                <h5 className="card-title">Apple</h5>
                <p>
                  No matter how far along you are in your sophistication as an
                  amateur.
                </p>
              </article>
            </div>
          </Link>
        </div>
        <div className="col-md-4 mb-3 ">
          <Link to={"category/GOOGLE?whichPage=1&choise=1&brands=&min=0&max=0&capacities="}>
            <div
              className="card-banner align-items-end img-google hvr"
              style={{ height: "250px" }}
            >
              <article className="caption top">
                <h5 className="card-title">Google</h5>
                <p>
                  No matter how far along you are in your sophistication as an
                  amateur.
                </p>
              </article>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to={"category/SAMSUNG?whichPage=1&choise=1&brands=&min=0&max=0&capacities="}>
            <div
              className="card-banner img-samsung hvr"
              style={{ height: "250px" }}
            >
              <article className="caption bottom">
                <h5 className="card-title">Samsung</h5>
                <p>
                  No matter how far along you are in your sophistication as an
                  amateur.
                </p>
              </article>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BannerCategories;
