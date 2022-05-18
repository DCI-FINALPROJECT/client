import React, { useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../helpers/requestMethods";
import { useNavigate } from "react-router-dom";
import { DataStore } from "../../DataStore";

const KEY = process.env.REACT_APP_STRIPE;


function CartPageDeliveryInfo() {
  const { user, setOrderNumber } = useContext(DataStore);

  const [cookies, setCookies] = useCookies(["cart"]);
  const [stripeToken, setStripeToken] = useState(null);
  const [whichContact, setWhichContact] = useState(
    user.address === undefined ? "other" : "user"
  );

  const [newContact, setNewContact] = useState({ address: undefined });
  const [showCheckout, setShowCheckout] = useState(false);

/* for coupon and discount */
  const [couponNumber, setCouponNumber] = useState("")
  const [discount, setDiscount] = useState(0)

  const changeCheckoutShowingStatus = () => {
    if (
      user.address &&
      whichContact === "other" &&
      newContact.address === undefined
    ) {
      setShowCheckout(false);
    } else if (user.address && whichContact === "user") {
      setShowCheckout(true);
    }
  };

  useEffect(() => {
    changeCheckoutShowingStatus();
  }, [whichContact]);

  useEffect(() => {


    if (user.address !== undefined) {
      setShowCheckout(true);
    } else if (newContact.address !== undefined && newContact.address !== "") {
      setShowCheckout(true);
    } else {
      setShowCheckout(false);
    }
  }, [newContact]);


  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };



  // TOTAL PRICE

  let totalPrice = 0;

  if (cookies.cart !== undefined) {
    cookies.cart.forEach((product) => {
      totalPrice += product.price * product.quantities;
    });
  }
  


  // STRIPE

  const createOrder = async () => {


    await fetch("https://smartshopdcifinal.herokuapp.com/payment/createOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        user: newContact.address ? newContact : user,
        products: await cookies.cart,
        stripeToken: stripeToken,
        discount:discount,
        userEmail: user.email || newContact.email || "",
        userId: newContact.email || user._id || user.email || stripeToken.email,
      }),
    })
      .then((data) => data.json())
      .then((data) => setOrderNumber(data.orderNumber))
      .then(() => setCookies("cart", [], { path: "/" }))
      .then(() => setNewContact({ address: undefined }))
      .catch((err) => err);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: await cookies.cart
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

  const changeContact = () => {
    whichContact === "user"
      ? setWhichContact("other")
      : setWhichContact("user");
  };

  const addNewContact = (e) => {
    e.preventDefault();

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const address = document.querySelector("#address").value;
    const phone = document.querySelector("#phone").value;
    const email = document.querySelector("#email").value;

    const createdNewContact = { firstName, lastName, address, phone, email };

    setNewContact(createdNewContact);
  };


  

  async function submitHandler(e){
    e.preventDefault();
    if(couponNumber.length>=13 && couponNumber.length<=15){

      const response = await fetch(`https://smartshopdcifinal.herokuapp.com/admin/getCoupon/${couponNumber}`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.userToken}`,
                },
              })

              if(response.status===200){

                response.json().then((data)=>{
                  
                  setDiscount(discount+data.amount)
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
    <div className="container">
      <div className="row">
        <article class="card col-lg-9">
          <div class="card-body">
            <div className="d-flex justify-content-between">
              <h5 class="card-title">
                {whichContact === "other" && "New Contact Info"}
                {whichContact === "user" && "My Contact Info"}
              </h5>

              <button
                onClick={changeContact}
                className={`btn btn-outline-warning ${
                  user.address === undefined && "d-none"
                }`}
              >
                {whichContact === "user" && "New Contact Info"}
                {whichContact === "other" && "Use My Contact Info"}
              </button>
            </div>
            {whichContact === "user" && (
              <div class="row">
                <div class="col-6 mb-3">
                  <label class="form-label">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Type here"
                    value={user.firstName}
                  />
                </div>
                <div class="col-6">
                  <label class="form-label">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Type here"
                    value={user.lastName}
                  />
                </div>
                <div class="col-lg-6 mb-3">
                  <label class="form-label">Phone</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    value={user.phone}
                  />
                </div>
                <div class="col-lg-6 mb-3">
                  <label class="form-label">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="example@gmail.com"
                    value={user.email}
                  />
                </div>
                <div class="col-sm-8 mb-3">
                  <label class="form-label">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Type here"
                    value={user.address}
                  />
                </div>
              </div>
            )}

            {whichContact === "other" && (
              <form onSubmit={addNewContact} class="row">
                <div class="col-6 mb-3">
                  <label class="form-label">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Type here"
                    id="firstName"
                    required
                  />
                </div>
                <div class="col-6">
                  <label class="form-label">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Type here"
                    id="lastName"
                    required
                  />
                </div>
                <div class="col-lg-6 mb-3">
                  <label class="form-label">Phone</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    id="phone"
                    required
                  />
                </div>
                <div class="col-lg-6 mb-3">
                  <label class="form-label">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="example@gmail.com"
                    id="email"
                    required
                  />
                </div>
                <div class="col-sm-12 mb-3">
                  <label class="form-label">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Type here"
                    id="address"
                    required
                  />
                  <br />
                  <div className="d-flex justify-content-between">
                    <button class="btn btn-primary">New Contact Info</button>
                    <span
                      className={`text-success ${
                        newContact.address ? "d-block" : "d-none"
                      }`}
                    >
                      Customer Infos are successfully added...
                    </span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </article>

        <aside class="col-lg-3">
          <div class="card mb-3">
            <div class="card-body">
              <form onSubmit={submitHandler}>
                <label class="form-label">Have coupon?</label>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Coupon code"
                    onChange={(e)=>{setCouponNumber(e.target.value)}}
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
                <dd class="text-end text-success">€  - {discount.toFixed(2)} </dd>
              </dl>
              <hr />
              <dl class="dlist-align">
                <dt>Total:</dt>
                <dd class="text-end text-dark h5">€  {totalPrice.toFixed(2) - discount}</dd>
              </dl>
              <div class="d-grid gap-2 my-3">
                <StripeCheckout
                  name="SmartSHOP"
                  image="https://th.bing.com/th/id/OIP.N3mtO110O-O5ePQ4t0LWFQHaLH?w=115&h=180&c=7&r=0&o=5&pid=1.7"
                  billingAddress
                  shippingAddress
                  description={`Your total is € ${totalPrice.toFixed(2)-discount}`}
                  amount={(totalPrice.toFixed(2)-discount) * 100}
                  token={onToken}
                  stripeKey={KEY}
                >
                  <button
                    onClick={() => {
                      navigate("/deliveryInfo");
                    }}
                    className={`btn btn-success w-100 ${
                      showCheckout === false && "d-none"
                    }`}
                  >
                    CHECKOUT NOW
                  </button>
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
  );
}

export default CartPageDeliveryInfo;
