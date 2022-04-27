import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DataStore } from "../../DataStore";
import PaymentConfirmationTemplate from "./PaymentConfirmationTemplate";

function UserPageOrderInfos() {
  const { user } = useContext(DataStore);

  const [activeOrders, setActiveOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [ready, setReady] = useState(false);
  const [num,setNum] = useState(0);

  console.log(activeOrders);

  const getActiveOrders = async () => {
    await fetch("http://localhost:5000/myactiveorders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email }),
    })
      .then((data) => data.json())
      .then((data) => setActiveOrders(data));
  };

  useEffect(() => {
    getActiveOrders();
  }, [ready]);

  console.log(activeOrders);

  const getProductsById = async () => {
    const array = [];

    for (let i = 0; i < activeOrders.length; i++) {
      for (let j = 0; j < activeOrders[i].products.length; j++) {
        await fetch(
          `http://localhost:5000/product/${activeOrders[i].products[j].id}`
        )
          .then((data) => data.json())
          .then((data) => array.push(data.images[0]))
          .then((data) => setProducts(array))
          .then((data) => setReady(true));
      }
    }
  };

  useEffect(() => {
    getProductsById();
  }, [activeOrders]);

  console.log(products);

  return (
    <div class="col-lg-9">
      {activeOrders.map((order) => {
        return (
          <article class="card mb-3">
            <div class="card-body">
              <header class="d-md-flex">
                <div class="flex-grow-1">
                  <h6 class="mb-0">
                    Order ID: {order.orderNumber} <i class="dot"></i>
                    <span class="text-danger"> Pending </span>
                  </h6>
                  <span>Date: {order.date}</span>
                </div>
                <div>
                  <a href="#" class="btn btn-sm btn-primary">
                    Track order
                  </a>
                </div>
              </header>
              <hr />
              <div class="row">
                <div class="col-md-4">
                  <p class="mb-0 text-muted">Contact</p>
                  <p class="m-0">
                    {order.userContact.firstName +
                      " " +
                      order.userContact.lastName}{" "}
                    <br /> Phone : {order.userContact.phone} <br /> Email :
                    {" " + order.userContact.email}
                  </p>
                </div>
                <div class="col-md-4 border-start">
                  <p class="mb-0 text-muted">Shipping address</p>
                  <p class="m-0">{order.userContact.address}</p>
                </div>
                <div class="col-md-4 border-start">
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
                {ready === true &&
                                     
                  order.products.map((product,index) => {  


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
            <PaymentConfirmationTemplate />
          </article>
        );
      })}
    </div>
  );
}

export default UserPageOrderInfos;
