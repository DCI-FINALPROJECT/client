import React, { useEffect, useState, useContext } from "react";
import { DataStore } from "../../DataStore";

function UserPageOrderHistory() {
  const { user } = useContext(DataStore);

  const [allOrders, setAllOrders] = useState([]);

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

  console.log(allOrders);

  return (
    <div className="col-lg-9 pt-2">
      
      <div className="">
        {allOrders.map((order, index) => {
          return (
            <ul className="list-unstyled card p-2 mr-2">
              <li className="order-number yellow">
                {index + 1}
              </li>
              <li>Order Number: {order.orderNumber}</li>
              <li>Date: {order.date}</li>
              <li>Amount: € {order.amount}</li>
              <li>Status: <span className="text-info">{order.status[order.status.length-1]}</span>  </li>
            </ul>
          );
        })}
      </div>
    </div>

    
  );
}

export default UserPageOrderHistory;
