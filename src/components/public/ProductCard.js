import React from "react";
import { useContext, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { DataStore } from "../../DataStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductCard() {
  // ProductById is for ProductCard come from App.js via useContext
  const { productById, productStars } = useContext(DataStore);

  // This state is for selected image.
  const [image, setImage] = useState(0);

  const [inStock, setInStock] = useState(true);

  console.log("inStock",inStock);

  const [stockMessage, setStockMessage] = useState("");

  const [cookies, setCookies] = useCookies(["cart"]);

  const [quantities, setQuantities] = useState(1);

  const [color, setColor] = useState("black");

  const [capacity, setCapacity] = useState("64 GB");

  const addToCart = (e) => {
    let array = new Cookies().get("cart") || [];

    let isProductAlreadyInCart = false;

    array.forEach((element) => {
      console.log(element);

      if (productById[capacity][color]) {
        if (
          element.id === productById._id &&
          element.color === color &&
          element.capacity === capacity
        ) {
          isProductAlreadyInCart = true;

          element.quantities += quantities;
        }
      }
    });

    if (productById[capacity][color] > 0 && !isProductAlreadyInCart) {
      array.push({
        id: productById._id,
        productName: productById.productName,
        brand: productById.brand,
        price: productById.price,
        images: productById.images,
        quantities: quantities,
        color: color,
        capacity: capacity,
      });
    }

    setCookies("cart", array, { path: "/" }); // We can get the cookies with 3. parameter.

    if (stockMessage.length === 0) {
      toast.success(`${quantities} adet ${capacity} ürün sepete eklendi...`);
    }

    console.log("Cookie:", array);
  };

  const selectedColor = (e) => {
    console.log(e.target.value);
    setColor(e.target.value);
    stockControl(quantities+1);
  };

  const selectedCapacity = (e) => {
    setCapacity(e.target.value);
    stockControl();
  };

  const artir = () => {
    setQuantities(quantities + 1);
    stockControl(quantities + 1);
  };
  const azalt = () => {
    if (quantities > 1) {
      setQuantities(quantities - 1);
      stockControl(quantities - 1);
    }
  };

  const stockControl = (num=1) => {

    console.log(productById);

    console.log(capacity, num, color);
    console.log(productById[capacity][color]);


    if (capacity === "64 GB" && color === "black") {
      if (quantities > productById[capacity][color]) {
        setInStock(false);
        setStockMessage("This product is not in our stock!");
      } else {
        setInStock(true);
        setStockMessage("");
      }
    } 
    else if (capacity === "64 GB" && color === "red") {
      if (quantities > productById[capacity][color]) {
        setInStock(false);
        setStockMessage("This product is not in our stock!");
      } else {
        setInStock(true);
        setStockMessage("");
      }
    }
     else if (capacity === "64 GB" && color === "green") {
      if (quantities > productById[capacity][color]) {
        setInStock(false);
        setStockMessage("This product is not in our stock!");
      } else {
        setInStock(true);
        setStockMessage("");
      }
    }
     else if (capacity === "64 GB" && color === "blue") {
      if (num > productById[capacity][color]) {
        setInStock(false);
        setStockMessage("This product is not in our stock!");
      } else {
        setInStock(true);
        setStockMessage("");
      }
    }
     else if (capacity === "128 GB" && color === "black") {
      if (num > productById[capacity][color]) {
        setInStock(false);
        setStockMessage("This product is not in our stock!");
      } else {
        setInStock(true);
        setStockMessage("");
      }
    }
    else if (capacity === "128 GB" && color === "red") {
      if (num > productById[capacity][color]) {
        setInStock(false);
        setStockMessage("This product is not in our stock!");
      } else {
        setInStock(true);
        setStockMessage("");
      }
    }
     else if (capacity === "128 GB" && color === "green") {
      if (num > productById[capacity][color]) {
        setInStock(false);
        setStockMessage("This product is not in our stock!");
      } else {
        setInStock(true);
        setStockMessage("");
      }
    }
     else if (capacity === "128 GB" && color === "blue") {
      if (num > productById[capacity][color]) {
        setInStock(false);
        setStockMessage("This product is not in our stock!");
      } else {
        setInStock(true);
        setStockMessage("");
      }
    }
     else if (capacity === "256 GB" && color === "black") {
      if (num > productById[capacity][color]) {
        setInStock(false);
        setStockMessage("This product is not in our stock!");
      } else {
        setInStock(true);
        setStockMessage("");
      }
    }
    else if (capacity === "256 GB" && color === "red") {
      if (num > productById[capacity][color]) {
        setInStock(false);
        setStockMessage("This product is not in our stock!");
      } else {
        setInStock(true);
        setStockMessage("");
      }
    }
     else if (capacity === "256 GB" && color === "green") {
      if (num > productById[capacity][color]) {
        setInStock(false);
        setStockMessage("This product is not in our stock!");
      } else {
        setInStock(true);
        setStockMessage("");
      }
    }
     else if (capacity === "256 GB" && color === "blue") {
      if (num > productById[capacity][color]) {
        setInStock(false);
        setStockMessage("This product is not in our stock!");
      } else {
        setInStock(true);
        setStockMessage("");
      }
    }
     else if (capacity === "512 GB" && color === "black") {
      if (num > productById[capacity][color]) {
        setInStock(false);
        setStockMessage("This product is not in our stock!");
      } else {
        setInStock(true);
        setStockMessage("");
      }
    }
    else if (capacity === "512 GB" && color === "red") {
      if (num > productById[capacity][color]) {
        setInStock(false);
        setStockMessage("This product is not in our stock!");
      } else {
        setInStock(true);
        setStockMessage("");
      }
    }
     else if (capacity === "512 GB" && color === "green") {
      if (num > productById[capacity][color]) {
        setInStock(false);
        setStockMessage("This product is not in our stock!");
      } else {
        setInStock(true);
        setStockMessage("");
      }
    }
     else if (capacity === "512 GB" && color === "blue") {
      if (num > productById[capacity][color]) {
        setInStock(false);
        setStockMessage("This product is not in our stock!");
      } else {
        setInStock(true);
        setStockMessage("");
      }
    }
  };



  return (
    <div>
      {/* product */}
      <ToastContainer />
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
                            alt=""
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
                      <li
                        style={{ width: `${productStars * 20}%` }}
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
                    <i className="dot">{productStars.toFixed(1)}</i>
                    <span className="label-rating text-muted">
                      <i className="fa fa-shopping-basket"></i>
                      {productById.sales} orders
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
                    <dt className="col-3">Color</dt>
                    <dd className="col-9">{}</dd>
                    <dt className="col-3">Material</dt>
                    <dd className="col-9">Cotton, Jeans </dd>
                    <dt className="col-3">Delivery</dt>
                    <dd className="col-9">Russia, USA, and Europe </dd>
                  </dl>
                  <hr />
                  <div className="row" bis_skin_checked="1">
                    <div className="col-md-3 mb-3" bis_skin_checked="1">
                      <select
                        onChange={selectedCapacity}
                        className="form-select"
                      >
                        <option>64 GB</option>
                        <option>128 GB</option>
                        <option>256 GB</option>
                        <option>512 GB</option>
                      </select>
                    </div>
                    <div className="col-md mb-3" bis_skin_checked="1">
                      <div className="mt-2" bis_skin_checked="1">
                        <label className="form-check form-check-inline">
                          <input
                            onChange={selectedColor}
                            className="form-check-input"
                            type="radio"
                            name="choose_11"
                            value="black"
                            defaultChecked="true"
                          />
                          <span className="form-check-label">Black</span>
                        </label>
                        <label className="form-check form-check-inline">
                          <input
                            onChange={selectedColor}
                            className="form-check-input"
                            type="radio"
                            name="choose_11"
                            value="red"
                          />
                          <span className="form-check-label">Red</span>
                        </label>
                        <label className="form-check form-check-inline">
                          <input
                            onChange={selectedColor}
                            className="form-check-input"
                            type="radio"
                            name="choose_11"
                            value="green"
                          />
                          <span className="form-check-label">Green</span>
                        </label>
                        <label className="form-check form-check-inline">
                          <input
                            onChange={selectedColor}
                            className="form-check-input"
                            type="radio"
                            name="choose_11"
                            value="blue"
                          />
                          <span className="form-check-label">Blue</span>
                        </label>
                      </div>
                      <div class="col-auto">
                        <div class="input-group input-spinner">
                          <button
                            onClick={azalt}
                            class="btn btn-light"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="#999"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 13H5v-2h14v2z"></path>
                            </svg>
                          </button>
                          <input
                            type="text"
                            class="form-control"
                            value={quantities}
                          />
                          <button
                            onClick={artir}
                            class="btn btn-light"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="#999"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      stockControl();
                      addToCart();
                    }}
                    className="btn btn-warning"
                  >
                    Buy now
                  </button>
                  <button
                    disabled = {inStock === false && "true"}
                    onClick={() => {
                      stockControl();
                      addToCart();
                    }}
                    className="btn btn-primary ml-2"
                  >
                    <i className="me-2 fa fa-shopping-basket"></i> Add to cart
                  </button>
                  <a href="/" className="btn btn-light">
                    <i className="me-2 fa fa-heart"></i> Save
                  </a>

                  <br />
                  <br />
                  <h4 className="text-danger">
                    {stockMessage.length > 0 && stockMessage}
                  </h4>
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
