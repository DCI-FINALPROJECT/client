import React from "react";
import { useCookies } from "react-cookie";
import Footer from "../public/Footer";
import Header from "../public/Header";
import CartPageProduct from "./CartPageProduct";

function CartPage() {
  const [cookies, setCookies] = useCookies(["cart"]);

  console.log(cookies);

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
                      return <CartPageProduct 
                          key={product._id}
                          product={product}
                      />;
                    })
                  : ""}
              </div>
              <div class="card-body border-top">
                <p class="mb-0">
                  <i class="me-2 text-success fa fa-truck"></i> Free Delivery
                  within 1-2 weeks
                </p>
              </div>
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
                  <dt>Total price:</dt> <dd class="text-end"> $1403.97</dd>
                </dl>
                <dl class="dlist-align">
                  <dt>Discount:</dt>
                  <dd class="text-end text-success"> - $60.00 </dd>
                </dl>
                <dl class="dlist-align">
                  <dt>TAX:</dt> <dd class="text-end text-danger"> + $14.00 </dd>
                </dl>
                <hr />
                <dl class="dlist-align">
                  <dt>Total:</dt>
                  <dd class="text-end text-dark h5"> $1357.97 </dd>
                </dl>
                <div class="d-grid gap-2 my-3">
                  <a href="#" class="btn btn-primary w-100">
                    Make Purchase
                  </a>
                  <a href="#" class="btn btn-light w-100">
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
