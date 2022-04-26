import React, { useState, useEffect,useContext } from "react";
import { useCookies } from "react-cookie";
import Footer from "../public/Footer";
import Header from "../public/Header";
import CartPageProduct from "./CartPageProduct";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";
import { DataStore } from "../../DataStore";

const KEY = process.env.REACT_APP_STRIPE;

console.log(KEY);

function CartPage() {

  const { user } = useContext(DataStore);

  const [cookies, setCookies] = useCookies(["cart"]);
  const [stripeToken, setStripeToken] = useState(null);
  const [orderNumber, setOrderNumber] = useState("");

  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  console.log(stripeToken);

  // TOTAL PRICE

  let totalPrice = 0;

  if (cookies.cart !== undefined) {
    cookies.cart.forEach((product) => {
      totalPrice += product.price * product.quantities;
    });
  }

  console.log(cookies);

  // STRIPE

  const createOrder = async () => {

    console.log(user);

    await fetch("http://localhost:5000/payment/createOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        products: await cookies.cart,
        stripeToken: stripeToken,
        userEmail: stripeToken.email,
        userId:user._id || stripeToken.email
      }),
    })
      .then((data) => data.json())
      .then((data) => setOrderNumber(data.orderNumber))
      .catch((err) => err);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: await cookies.cart,
        });
        navigate("/cartPage", {
          stripeData: res.data,
          products: cookies.cart,
        });

        createOrder();

        

      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, totalPrice, navigate]);

  return (
    <div>
      <Header />
      <div className="container my-3 shadow">
        <div class="row">
          <div class="col-lg-9">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title mb-4">Shopping cart</h5>

                {cookies.cart !== undefined && cookies.cart.length > 0
                  ? cookies.cart.map((product) => {
                      return (
                        <CartPageProduct key={product._id} product={product} />
                      );
                    })
                  : ""}
              </div>

              {orderNumber ? (
                <div>
                  <div
                    class="d-flex justify-content-between align-items-center alert alert-success alert-dismissible fade show px-2"
                    role="alert"
                  >
                    <div>
                      Your order with number{" "}
                      <strong> {`${orderNumber}`} </strong>
                      has been created...
                    </div>
                    <button
                      type="button"
                      class="btn border btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    >
                      x
                    </button>
                  </div>
                  <div class="card-body border-top">
                    <p class="mb-0">
                      <i class="me-2 text-success fa fa-truck"></i> Free
                      Delivery within 1-2 weeks
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <aside class="col-lg-3">
            <div class="card mb-3">
              <div class="card-body">
                <form>
                  <label class="form-label">Have coupon?</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Coupon code"
                    />
                    <button class="btn btn-light">Apply</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <dl class="dlist-align">
                  <dt>Total price:</dt>
                  <dd class="text-end"> € {totalPrice.toFixed(2)}</dd>
                </dl>
                <dl class="dlist-align">
                  <dt>Discount:</dt>
                  <dd class="text-end text-success"> - 0 </dd>
                </dl>
                <hr />
                <dl class="dlist-align">
                  <dt>Total:</dt>
                  <dd class="text-end text-dark h5">
                    € {totalPrice.toFixed(2)}
                  </dd>
                </dl>
                <div class="d-grid gap-2 my-3">
                  <StripeCheckout
                    name="SmartSHOP"
                    image="https://th.bing.com/th/id/OIP.N3mtO110O-O5ePQ4t0LWFQHaLH?w=115&h=180&c=7&r=0&o=5&pid=1.7"
                    billingAddress
                    shippingAddress
                    description={`Your total is € ${totalPrice.toFixed(2)}`}
                    amount={totalPrice.toFixed(2) * 100}
                    token={onToken}
                    stripeKey={KEY}
                  >
                    <button class="btn btn-light w-100">CHECKOUT NOW</button>
                  </StripeCheckout>
                  <a href="/" class="btn btn-light w-100 mt-1">
                    Back to shop
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CartPage;
