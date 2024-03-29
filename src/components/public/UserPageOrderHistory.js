import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DataStore } from "../../DataStore";
import PaymentConfirmationTemplate from "./PaymentConfirmationTemplate";

function UserPageOrderHistory() {
  const { user } = useContext(DataStore);

  const [allOrders, setAllOrders] = useState([]);
  const [ready, setReady] = useState(false);
  const [couponNumber, setCouponNumber] = useState("");

  const getAllOrders = async () => {
    await fetch("http://localhost:5000/myallorders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email }),
    })
      .then((data) => data.json())
      .then((data) => setAllOrders(data));
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  const showDetails = (e) => {
    const element = e.target;

    const nextSibling = element.nextSibling;

    console.log(nextSibling.getAttribute("className") === "d-block");

    if (nextSibling.getAttribute("class") === "d-block") {
      nextSibling.setAttribute("class", "d-none");
    } else {
      nextSibling.setAttribute("class", "d-block");
    }
  };

  console.log(allOrders);

  return (
    <div className="col-lg-9 pt-2">
      <div className="">
        {allOrders.map((order, index) => {
          return (
            <ul className="list-unstyled card p-2 mr-2">
              <li className="order-number yellow">{index + 1}</li>
              <li>Order Number: {order.orderNumber}</li>
              <li>Date: {order.date}</li>
              <li>Amount: € {order.amount}</li>
              <li>
                Status:{" "}
                <span className="text-info">
                  {order.status[order.status.length - 1]}
                </span>{" "}
              </li>
              <button onClick={showDetails} className="btn btn-info">
                Show Order Details
              </button>
              <div class="d-none">
                <div class="card-body">
                  <header class="d-md-flex">
                    <div class="flex-grow-1">
                      <h6 class="mb-0 d-flex justify-content-between">
                        <span>
                          Order ID: {order.orderNumber} <i class="dot"></i>
                          <span class="text-danger">
                            {order.status[order.status.length - 1]}
                          </span>
                        </span>
                        <span>
                          {order.status[order.status.length - 1] !==
                            "Order received" && (
                            <img
                              style={{ width: "100px" }}
                              src="./images/dhllogo.png"
                              alt=""
                            />
                          )}
                        </span>
                      </h6>
                      <span>Date: {order.date}</span>
                    </div>
                  </header>
                  <hr />
                  <div class="row">
                    <div class="col-md-4">
                      <p class="mb-0 text-muted">Contact</p>
                      <p class="m-0">
                        {order.userContact.firstName +
                          " " +
                          order.userContact.lastName}
                        <br /> Phone : {order.userContact.phone} <br /> Email :
                        {" " + order.userContact.email}
                      </p>
                    </div>
                    <div class="col-md-4 border-start">
                      <p class="mb-0 text-muted">Shipping address</p>
                      <p class="m-0">{order.userContact.address}</p>

                      {order.products[0].capacity.slice(0, 2) === "GC" ? (
                        <div>
                          <p class="mb-0 text-muted">Coupon Number</p>
                          <p class="m-0">{couponNumber}</p>
                        </div>
                      ) : null}
                    </div>

                    <div class="col-md-4 border-start">
                      <p class="mb-0 text-muted">Product Preis</p>
                      <p class="m-0">
                        <strong>
                          Prd Price: €{order.amount + order.discount}
                        </strong>
                      </p>

                      <p class="mb-0 text-muted">Discount</p>
                      <p class="m-0">
                        <strong>Discount: €{order.discount}</strong>
                      </p>
                      <p class="mb-0 text-muted">Payment</p>
                      <p class="m-0">
                        <strong>Total paid: €{order.amount}</strong>
                      </p>
                    </div>
                  </div>
                  <hr />
                  <ul
                    style={{ listStyle: "none" }}
                    class="d-flex justify-content-center align-items-center flex-wrap"
                  >
                    {order.products.map((product, index) => {
                      return (
                        <li class="col-lg-4 col-md-6">
                          <div class="itemside mb-3">
                            <Link to={`/product/${product.id}`}>
                              <div class="aside">
                                <img
                                  width="72"
                                  height="72"
                                  src={product.image}
                                  class="img-sm rounded border"
                                  alt=""
                                />
                              </div>
                            </Link>
                            <div class="info">
                              <p class="title">{product.name}</p>

                              <p>Price: € {product.price}</p>
                              <p>Quantity: {product.quantities}</p>
                              <p>Color: {product.color}</p>
                              <p>Capacity: {product.capacity}</p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <PaymentConfirmationTemplate status={order.status} />
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default UserPageOrderHistory;
