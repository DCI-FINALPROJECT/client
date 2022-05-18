import React, { useState, useContext, useEffect } from "react";
import { DataStore } from "../../DataStore";
import { Cookies, useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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

  const addToCart = async (e) => {


    let array = (await new Cookies().get("cart")) || [];
    let isProductAlreadyInCart = false;
    console.log(productInfo);
    array.forEach((element) => {
      if (
        element.id === productInfo._id &&
        element.color === color &&
        element.capacity === productInfo.capacity
      ) {
        isProductAlreadyInCart = true;
        element.quantities += quantities;
      }
    });
    if (productInfo.stock[color] > 0 && !isProductAlreadyInCart) {
      array.push({
        id: productInfo._id,
        quantities: quantities,
        color: color,
        capacity: productInfo.capacity,
        price: productInfo.price,
        image: productInfo.images[0],
      });
    }
    setCookies("cart", array, { path: "/" }); // We can get the cookies with 3. parameter.
    if (stockMessage.length === 0) {
      toast.success(`${quantities} piece ${capacity} product is added to cart...`);
    }
    console.log("Cookie:", array);
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
    fetch(`https://smartshopdcifinal.herokuapp.com/product/${product.id}`)
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
        <div className="col-md-6">
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
        <div className="col-md-2">
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
        <div className="col-md-4">
          <div className="d-flex justify-content-center">

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
              <i style={{
                          fontSize: "16px",
                          color: "red",
                        }}
                        className="far fa-trash-alt"
                      ></i>
            </button>
            </div>
          
        </div>
      </article>
    </div>
  );
}

export default WishPageProduct;
