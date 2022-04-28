import React, { useState, useEffect,useContext } from "react";
import { useCookies } from "react-cookie";
import Footer from "../public/Footer";
import Header from "../public/Header";
import CartPageProduct from "./CartPageProduct";
import { useNavigate } from "react-router-dom";
import { DataStore } from "../../DataStore";



function CartPage() {

  const { user,orderNumber } = useContext(DataStore);

  const [cookies, setCookies] = useCookies(["cart"]);

  const navigate = useNavigate();

  let totalPrice = 0;
    
  if (cookies.cart !== undefined) {
    cookies.cart.forEach((product) => {
      totalPrice += product.price * product.quantities;
    });
  }

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
                
                  <button onClick={()=>navigate("/deliveryInfo")} class="btn btn-light w-100">Go to Pay</button>
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
