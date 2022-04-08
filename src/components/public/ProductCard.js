import React from "react";
import { useContext, useState } from "react";
import { DataStore } from "../../DataStore";

function ProductCard() {
  // ProductById is for ProductCard come from App.js via useContext
  const { productById } = useContext(DataStore);

  // This state is for selected image.
  const [image, setImage] = useState(0);

  console.log("PRODUCT_CARD:", productById, image);

  return (
    <div>
      {/* product */}
      <div>
        <section className="padding-y bg-white shadow-sm">
          <div className="container" bis_skin_checked="1">
            <div className="row" bis_skin_checked="1">
              <aside className="col-lg-6">
                <article className="gallery-wrap">
                  <div
                    className="img-big-wrap img-thumbnail"
                    bis_skin_checked="1"
                  >
                    <span href="">
                      <img src={productById.images[image]} />
                    </span>
                  </div>
                  <div className="thumbs-wrap" bis_skin_checked="1">
                    {productById.images.map((image, index) => {
                      return (
                        <span className="item-thumb">
                          <img
                            onClick={() => setImage(index)}
                            src={productById.images[index]}
                          />
                        </span>
                      );
                    })}
                  </div>
                </article>
              </aside>
              <div className="col-lg-6" bis_skin_checked="1">
                <article className="ps-lg-3">
                  <h4 className="title text-dark">{productById.productName}</h4>
                  <div className="rating-wrap my-3" bis_skin_checked="1">
                    <ul className="rating-stars">
                      <li style={{ width: "80%" }} className="stars-active">
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
                    <b className="label-rating text-warning">
                      {" "}
                      {productById.stars}
                    </b>
                    <i className="dot"></i>
                    <span className="label-rating text-muted">
                      <i className="fa fa-shopping-basket"></i> 154 orders
                    </span>
                    <i className="dot"></i>
                    <span className="label-rating text-success">Verified</span>
                  </div>
                  <div className="mb-3" bis_skin_checked="1">
                    <var className="price h5">{productById.price}</var>
                    <span className="text-muted"> €</span>
                  </div>
                  <p>{productById.description}</p>
                  <dl className="row">
                    <dt className="col-3">Model</dt>
                    <dd className="col-9">{productById.productName}</dd>
                    <dt className="col-3">Color</dt>{" "}
                    <dd className="col-9">{}</dd>
                    <dt className="col-3">Material</dt>
                    <dd className="col-9">Cotton, Jeans </dd>
                    <dt className="col-3">Delivery</dt>
                    <dd className="col-9">Russia, USA, and Europe </dd>
                  </dl>
                  <hr />
                  <div className="row" bis_skin_checked="1">
                    <div className="col-md-3 mb-3" bis_skin_checked="1">
                      <select className="form-select">
                        <option selected="">Select size</option>
                        <option>Small</option> <option>Medium</option>
                        <option>Large</option>
                      </select>
                    </div>
                    <div className="col-md mb-3" bis_skin_checked="1">
                      <div className="mt-2" bis_skin_checked="1">
                        <label className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="choose_11"
                            value="option1"
                          />
                          <span className="form-check-label">Red</span>
                        </label>
                        <label className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="choose_11"
                            value="option1"
                          />
                          <span className="form-check-label">Green</span>
                        </label>
                        <label className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="choose_11"
                            value="option1"
                          />
                          <span className="form-check-label">Blue</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <a href="/" className="btn btn-warning">
                    Buy now
                  </a>
                  <a href="/" className="btn btn-primary">
                    <i className="me-2 fa fa-shopping-basket"></i> Add to cart
                  </a>
                  <a href="/" className="btn btn-light">
                    <i className="me-2 fa fa-heart"></i> Save
                  </a>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductCard;
