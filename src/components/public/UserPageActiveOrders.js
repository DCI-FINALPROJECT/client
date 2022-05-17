import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DataStore } from "../../DataStore";
import PaymentConfirmationTemplate from "./PaymentConfirmationTemplate";

function UserPageOrderInfos() {
  const { user } = useContext(DataStore);

  const [activeOrders, setActiveOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [ready, setReady] = useState(false);
  const [couponNumber, setCouponNumber] = useState("");

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
      .then((data) => {
        
        setActiveOrders(data)});
  };

  /* data.forEach(element => {
          if(element.products[0].capacity.slice(0,2)==="GC"){
            const giftNumber =element.products[0].capacity
            console.log("if calisiyor");
            console.log(giftNumber);
            const result = async( )=>{
              console.log("result calisiyor");
              await fetch("http://localhost:5000/getGift", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ giftNumber}),
              }).then((data) => data.json())
              .then((data)=>setCouponNumber(data.couponNumber))
            } 
            
            
            
            result();
          }
          
        }); */


  useEffect(() => {
    getActiveOrders();
  }, [ready]);

  console.log("activeOrders",activeOrders);

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

        console.log(order)

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
                  

                  {order.products[0].capacity.slice(0,2)==="GC"?  
                  (
                    <div>

                      <p class="mb-0 text-muted">Coupon Number</p>
                      <p class="m-0">{couponNumber}</p>
                    </div>
                  ):null
                   
                       
                      }
                 
                 
                </div>
                
                <div class="col-md-4 border-start">
                <p class="mb-0 text-muted">Product Preis</p>
                  <p class="m-0">
                    <strong>Prd Price: €{order.amount + order.discount}</strong>
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
