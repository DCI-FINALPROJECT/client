import React, { useState, useContext, useEffect } from "react";
import { DataStore } from "../../DataStore";
import { Cookies, useCookies } from "react-cookie";


function WishPageProduct({ product }) {
  const { productById, productStars } = useContext(DataStore);
  const [cookies, setCookies] = useCookies(["cart"]);

  const [cookiesWish, setCookiesWish] = useCookies(["wish"]);

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

  const addToCart = () => {
    let array = new Cookies().get("cart");

    if (array === undefined) {
      array = [];
    }


    array.forEach((element) => {

      console.log(element);

      if (
        element.id === product.id &&
        element.color === product.color &&
        element.capacity === product.capacity &&
        element.quantities === product.quantities
      ) {
        element.quantities = product;
      }
    });

    setCookies("cart", array, { path: "/" }); // We can get the cookies with 3. parameter.
  };

  console.log(cookies);
  

  const artir = () => {
    if (quantities < getStockNumber()) {
      console.log(product);
      setColor(product.color);
      addToCart(quantities + 1);
      setQuantities(quantities + 1);
    } else {
      stockControl(quantities + 1);
    }
  };
  const azalt = () => {
    if (quantities > 1) {
      setColor(product.color);
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

  // WE CAN GET ALL INFORMATION OF PRODUCTS FROM SERVER !!! NO COOKIE

  const getInformation = () => {
    fetch(`http://localhost:5000/product/${product.id}`)
      .then((data) => data.json())
      .then((data) => {
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
  }, [product.quantities !== undefined, cookiesWish.wish]);

  const removeProduct = () => {
    let array = cookiesWish.wish;

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

    setCookiesWish("wish", newArray, { path: "/" });
  };

  // IF USER COME LATER AND SOME PRODUCTS ARE ALREADY SOLD OR STOCK IS LESS THAN COOKIE,
  // WE WILL DELETE THE PRODUCT THAT LESS THAN COOKIE IN BASKET

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

  //THIS FUNK. IS FOR ADD AND DECREASE FUNKS

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

  return (
    <div>
      <article className="row gy-3 my-2 py-3 shadow">
        <div className="col-lg-6">
          <div className="itemside me-lg-5">
            <div className="aside">
              <img
                src={productInfo.images[0]}
                className="img-sm border rounded"
                alt=""
              />
            </div>
            <div className="info">
              <a href={`/product/${product.id}`} className="title mb-1">
                {productInfo.productNameWithCapacity}
              </a>
              <p className="text-muted small">Color: {product.color}</p>
              <p className="text-muted small">Quantity: {quantities}</p>
              <p classNameName="text-danger">{stockMessage}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 col-6">
          <div className="price-wrap lh-sm">
            <var className="price h6">
              € {(productInfo.price * quantities).toFixed(2)}
            </var>{" "}
            <br />
            <small className="text-muted">
              {" "}
              € {productInfo.price} / per item{" "}
            </small>
          </div>
        </div>
        <div className="col-lg col-sm-4">
          <div className="float-lg-end">
            <button onClick={removeProduct} className="btn btn-yellow mr-2">
              Add to cart
            </button>
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
            <button
              onClick={removeProduct}
              className="btn btn-light text-danger"
            >
              Remove
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default WishPageProduct;
