import React, { useState, useContext, useEffect } from "react";
import { DataStore } from "../../DataStore";
import { Cookies, useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

function CartPageProduct({ product }) {
  const { productById, productStars } = useContext(DataStore);
  const [cookies, setCookies] = useCookies(["cart"]);

  const [quantities, setQuantities] = useState(1);
  const [color, setColor] = useState("Black");
  const [inStock, setInStock] = useState(true);
  const [stockMessage, setStockMessage] = useState("");
  const [capacity, setCapacity] = useState("");

  const [productInfo, setProductInfo] = useState({
    productName: "",
    category: "",
    brand: "",
    price: "",
    description: "",
    images: [],
    quantities: [],
    capacity: "",
    stock: { Black: 0, Red: 0, Green: 0, Blue: 0 },
  });

  const artir = () => {
    if (quantities < getStockNumber()) {
      addToCart(quantities + 1);
      setQuantities(quantities + 1);
    } else {
      stockControl(quantities + 1);
    }
  };
  const azalt = () => {
    if (quantities > 1) {
      addToCart(quantities - 1);
      setQuantities(quantities - 1);
      stockControl(quantities - 1);
    }
  };

  const stockControl = (num) => {
    if (color === "Black") {
      if (num > productInfo.stock[color]) {
        setInStock(false);
        setStockMessage(
          `Number of products in stock: ${productInfo.stock[color]}`
        );
      } else {
        setInStock(true);
        setStockMessage("");
      }
    } else if (color === "Red") {
      if (num > productInfo.stock[color]) {
        setInStock(false);
        setStockMessage(
          `Number of products in stock: ${productInfo.stock[color]}`
        );
      } else {
        setInStock(true);
        setStockMessage("");
      }
    } else if (color === "Green") {
      if (num > productInfo.stock[color]) {
        setInStock(false);
        setStockMessage(
          `Number of products in stock: ${productInfo.stock[color]}`
        );
      } else {
        setInStock(true);
        setStockMessage("");
      }
    } else if (color === "Blue") {
      if (num > productInfo.stock[color]) {
        setInStock(false);
        setStockMessage(
          `Number of products in stock: ${productInfo.stock[color]}`
        );
      } else {
        setInStock(true);
        setStockMessage("");
      }
    }
  };

  const getInformation = () => {
    fetch(`http://localhost:5000/product/${product.id}`)
      .then((data) => data.json())
      .then((data) => {


        console.log(product.quantities, getStockNumberAtFirst(data.stock));

        if (product.quantities > getStockNumberAtFirst(data.stock)) {
          removeProduct();
        } else {
          setProductInfo(data);
        }
      });
  };

  useEffect(() => {
    setQuantities(product.quantities);
    getInformation();
  }, [product.quantities !== undefined, cookies.cart]);

  const removeProduct = () => {
    const array = cookies.cart;

    if (array === undefined) {
      array = [];
    }

    const newArray = array.filter((productFromCookie) => {
      return !(
        productFromCookie.id === product.id &&
        productFromCookie.color === product.color &&
        productFromCookie.capacity === product.capacity &&
        productFromCookie.quantities === product.quantities
      );
    });

    console.log("NEWARRAY:", newArray);

    setCookies("cart", newArray, { path: "/" });
  };

  function getStockNumberAtFirst(stock) {
    if (product.color === "Black") {
      return stock.Black;
    } else if (product.color === "Red") {
      return stock.Red;
    } else if (product.color === "Green") {
      return stock.Green;
    } else if (product.color === "Blue") {
      return stock.Blue;
    }
  }

  function getStockNumber() {
    if (color === "Black") {
      return productInfo.stock.Black;
    } else if (color === "Red") {
      return productInfo.stock.Red;
    } else if (color === "Green") {
      return productInfo.stock.Green;
    } else if (color === "Blue") {
      return productInfo.stock.Blue;
    }
  }

  const addToCart = (num) => {
    let array = new Cookies().get("cart");

    if (array === undefined) {
      array = [];
    }

    array.forEach((element) => {
      if (
        element.id === product.id &&
        element.color === product.color &&
        element.capacity === product.capacity &&
        element.quantities === product.quantities
      ) {
        element.quantities = num;
      }
    });

    setCookies("cart", array, { path: "/" }); // We can get the cookies with 3. parameter.
  };

  return (
    <div>
      <article class="row gy-3 my-2 py-3 shadow">
        <div class="col-lg-6">
          <div class="itemside me-lg-5">
            <div class="aside">
              <img
                src={productInfo.images[0]}
                class="img-sm border rounded"
                alt=""
              />
            </div>
            <div class="info">
              <a href={`/product/${product.id}`} class="title mb-1">
                {productInfo.productNameWithCapacity}
              </a>
              <p class="text-muted small">Color: {product.color}</p>
              <p class="text-muted small">Quantity: {quantities}</p>
              <p className="text-danger">{stockMessage}</p>
            </div>
          </div>
        </div>
        <div class="col-auto">
          <div class="input-group input-spinner">
            <button onClick={azalt} class="btn btn-light" type="button">
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
            <input type="text" class="form-control" value={quantities} />
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
        <div class="col-lg-2 col-sm-4 col-6">
          <div class="price-wrap lh-sm">
            <var class="price h6">
              € {(productInfo.price * quantities).toFixed(2)}
            </var>{" "}
            <br />
            <small class="text-muted"> € {productInfo.price} / per item </small>
          </div>
        </div>
        <div class="col-lg col-sm-4">
          <div class="float-lg-end">
            <button onClick={removeProduct} class="btn btn-light text-danger">
              Remove
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default CartPageProduct;
