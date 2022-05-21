import React, { useContext, useState, useEffect } from "react";
import { DataStore } from "../../DataStore";
import AdminNav from "./AdminNav";
import Footer from "./Footer";
import Header from "./Header";
import NotAuthorize from "./NotAuthorize";
function AdminNewOrders() {
  const [adminPermission, setadminPermission] = useState(null);
  const { user } = useContext(DataStore);
  const [sendedDHL,setSendedDHL] =useState("");

  const [allNewOrders, setAllNewOrders] = useState([]);

  const userPagePermissionControl = () => {
    fetch("http://localhost:5000/userpage", {
      method: "GET",
      Accept: "application/json",
      headers: {
        Authorization: `Bearer ${localStorage.userToken}`,
      },
    })
      .then((data) => data.json())
      .then((data) => console.log(data))
      .then((data) => {
        user.isAdmin === true
          ? setadminPermission(true)
          : setadminPermission(false);
      });
  };

  const getNewOrders = async () => {
    fetch("http://localhost:5000/allneworders")
      .then((data) => data.json())
      .then((data) => setAllNewOrders(data));
  };

  useEffect(() => {
    getNewOrders();
  }, [sendedDHL]);

  console.log(allNewOrders);

  const shipOrderHandle = (e) => {
    const orderNumber = e.target.value;


    const result = fetch("http://localhost:5000/shiporder", {
      method: "PATCH",
      body: JSON.stringify({
        orderNumber: orderNumber,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(data=>setSendedDHL(orderNumber));
  };

  userPagePermissionControl();
  return (
    <div>
      <Header />
      <AdminNav />
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {adminPermission ? (
          <div
            style={{ width: "100%" }}
            className="d-flex justify-content-center"
          >
            <div
              style={{ width: "50%", minWidth: "50%" }}
              className=" d-flex flex-column text-center"
            >
              <div className="bg-dark text-light">All New Orders</div>
              <div className="bg-light border">
                {allNewOrders.map((order, index) => {
                  return (
                    <div className="d-flex justify-content-between align-items-center p-1">
                      <span>{index + 1})</span>
                      <span>
                        {order.userContact.firstName +
                          " " +
                          order.userContact.lastName}
                      </span>
                      <span>{order.userContact.email}</span>
                      <span>{order.userContact.address}</span>
                      <span>{order.userContact.phone}</span>
                      <button
                        onClick={shipOrderHandle}
                        value={order.orderNumber}
                        className="btn btn-success"
                      >
                        Send with DHL
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <NotAuthorize />
        )}
      </div>
      <Footer />
    </div>
  );
}
export default AdminNewOrders;
