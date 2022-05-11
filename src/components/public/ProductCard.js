import React from "react";
import { useContext, useState, useEffect } from "react";
import { Cookies, useCookies } from "react-cookie";
import { DataStore } from "../../DataStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useNavigate } from "react-router-dom";
function ProductCard() {
  const navigate = useNavigate();
  const params = useParams();
  // ProductById is for ProductCard come from App.js via useContext
  const { productById, productStars } = useContext(DataStore);
  // This state is for selected image.
  const [image, setImage] = useState(0);
  const [inStock, setInStock] = useState(true);
  const [stockMessage, setStockMessage] = useState("");
  const [cookies, setCookies] = useCookies(["cart"]);
  const [quantities, setQuantities] = useState(1);
  const [color, setColor] = useState("Black");
  const [capacity, setCapacity] = useState("");
  const [colors, setColors] = useState(
    Object.getOwnPropertyNames(productById.stock)
  );
  const addToCart = async (e) => {
    let array = (await new Cookies().get("cart")) || [];
    let isProductAlreadyInCart = false;
    console.log(productById);
    array.forEach((element) => {
      if (
        element.id === productById._id &&
        element.color === color &&
        element.capacity === productById.capacity
      ) {
        isProductAlreadyInCart = true;
        element.quantities += quantities;
      }
    });
    if (productById.stock[color] > 0 && !isProductAlreadyInCart) {
      array.push({
        id: productById._id,
        quantities: quantities,
        color: color,
        capacity: productById.capacity,
        price: productById.price,
        image: productById.images[0],
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
    setQuantities(1);
    setColor(e.target.value);
    setStockMessage("");
    console.log(productById);
    directStockControlByColor();
    stockControl();
  };
  function directStockControlByColor() {
    if (productById.stock[color] === 0) {
      setInStock(false);
      setStockMessage(
        `Number of products with color ${color} in stock: ${productById.stock[color]}`
      );
    }
  }
  useEffect(() => {
    directStockControlByColor();
  }, [color, params.id, capacity]);
  const selectedCapacity = (e) => {
    setQuantities(1);
    setInStock(true);
    setStockMessage("");
    setCapacity(e.target.value);
    stockControl();
    directStockControlByColor();
  };
  function getProductByCapacity() {
    const data = fetch(
      `http://localhost:5000/product/capacity/${productById.productName}/${capacity}`
    )
      .then((data) => data.json())
      .then((data) => navigate(`/product/${data.id}`));
  }
  useEffect(getProductByCapacity, [capacity]);
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
  const stockControl = (num) => {
    if (color === "Black") {
      if (num > productById.stock[color]) {
        setInStock(false);
        setStockMessage(
          `Number of products in stock: ${productById.stock[color]}`
        );
      } else {
        setInStock(true);
        setStockMessage("");
      }
    } else if (color === "Red") {
      if (num > productById.stock[color]) {
        setInStock(false);
        setStockMessage(
          `Number of products in stock: ${productById.stock[color]}`
        );
      } else {
        setInStock(true);
        setStockMessage("");
      }
    } else if (color === "Green") {
      if (num > productById.stock[color]) {
        setInStock(false);
        setStockMessage(
          `Number of products in stock: ${productById.stock[color]}`
        );
      } else {
        setInStock(true);
        setStockMessage("");
      }
    } else if (color === "Blue") {
      if (num > productById.stock[color]) {
        setInStock(false);
        setStockMessage(
          `Number of products in stock: ${productById.stock[color]}`
        );
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
                  <h4 className="title text-dark">
                    {productById.productNameWithCapacity}
                  </h4>
                  <div className="rating-wrap my-3" bis_skin_checked="1">
                    <ul className="rating-stars">
                      <li
                        style={{ width: `${productStars}%` }}
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
                    <i className="dot p-1">{productStars.toFixed(0)}%</i>
                    <span className="label-rating text-muted">
                      <i className="fa fa-shopping-basket"></i>
                      {productById.sales} orders
                    </span>
                    <i className="dot"></i>
                  </div>
                  <div className="mb-3" bis_skin_checked="1">
                    <var className="price h5">{productById.price}</var>
                    <span className="text-muted"> €</span>
                  </div>
                  <p>{productById.description}</p>
                  <dl className="row">
                    <dd className="col-3">Model</dd>
                    <dt className="col-9">{productById.productName}</dt>
                    <dd className="col-3">Color</dd>
                    <dt className="col-9">{colors.toString()}</dt>
                    <dd className="col-3">Capacity</dd>
                    <dt className="col-9">{productById.capacity} </dt>
                  </dl>
                  <hr />
                  <div className="row" bis_skin_checked="1">
                    <div className="col-md-3 mb-3 mr-5" bis_skin_checked="1">
                      <select
                        onChange={selectedCapacity}
                        className="form-select "
                        style={{borderRadius:"10px" ,padding:"4px 4px", height:"2.2em",fontSize:"1.05rem", border:"none"}}
                      >
                         <option disabled selected style={{color:"#E0E0E0"}}>Select Capacity</option>
                        <option >64 GB</option>
                        <option >128 GB</option>
                        <option >256 GB</option>
                        <option >512 GB</option>
                      </select>
                    </div>
                    <div className="col-md mb-3" bis_skin_checked="1">
                      <div className="mt-2" bis_skin_checked="1">
                        {colors.map((color) => {
                          return (
                            <label className="form-check form-check-inline">
                              <input
                                onChange={selectedColor}
                                className="form-check-input"
                                type="radio"
                                name="choose_11"
                                value={color}
                                id="blackCheck"
                              />
                              <span className="form-check-label">
                                {color.substring(0, 1).toUpperCase() +
                                  color.substring(1)}
                              </span>
                            </label>
                          );
                        })}
                        <div class="col-auto m-3">
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
                              disabled={inStock === false && true}
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
                  </div>
                  <button
                    disabled={inStock === false && true}
                    onClick={() => {
                      stockControl();
                      addToCart();
                    }}
                    className="btn btn-yellow mx-2"
                  >
                    <i className="me-2 fa fa-shopping-basket"></i> Add to cart
                  </button>
                  <a href="/" className="btn btn-outline-dark">
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
       

