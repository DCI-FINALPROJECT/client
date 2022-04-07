import React from "react";

function BannerCategories() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div
            className="card-banner align-items-end img-apple"
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
        </div>
        <div className="col-md-4">
          <div
            className="card-banner align-items-end img-google"
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
        </div>
        <div className="col-md-4">
          <div className="card-banner img-samsung" style={{ height: "250px" }}>
            <article className="caption bottom">
              <h5 className="card-title">Samsung</h5>
              <p>
                No matter how far along you are in your sophistication as an
                amateur.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerCategories;
