import React, { useState, useEffect,useContext } from "react";
import { useCookies } from "react-cookie";
import Footer from "../public/Footer";
import Header from "../public/Header";
import CartPageProduct from "./CartPageProduct";
import { useNavigate } from "react-router-dom";
import { DataStore } from "../../DataStore";



function CartPage() {

  const { orderNumber } = useContext(DataStore);

  const [cookies, setCookies] = useCookies(["cart"]);

  const [couponNumber, setCouponNumber] = useState("")
  const [discount, setDiscount] = useState(0)

  const navigate = useNavigate();

  let totalPrice = 0;
    
  if (cookies.cart !== undefined) {
    cookies.cart.forEach((product) => {
      totalPrice += product.price * product.quantities;
    });
  }

  async function submitHandler(e){
    e.preventDefault();
    if(couponNumber.length>=13 && couponNumber.length<=15){

      const response = await fetch(`http://localhost:5000/admin/getCoupon/${couponNumber}`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.userToken}`,
                },
              })

              if(response.status===200){

                response.json().then((data)=>{
                  setDiscount(data.amount)
                  alert(data.message)
                })
              }else{
                response.json().then((data)=>{
                  alert(data.message)
                })
              }
    }else{alert("you dont have valid coupon")}
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
            
            <div class="card">
              <div class="card-body">
                <dl class="dlist-align">
                  <dt>Total price:</dt>
                  <dd class="text-end"> € {totalPrice.toFixed(2)}</dd>
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
