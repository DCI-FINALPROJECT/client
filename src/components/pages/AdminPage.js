import React, { useState,useContext } from "react";
import { DataStore } from "../../DataStore";
import AdminNav from "../public/AdminNav";
import Footer from "../public/Footer";
import Header from "../public/Header";

function AdminPage() {

  const { user} = useContext(DataStore);

  

  const [adminPermission, setadminPermission] = useState(null);

  const userPagePermissionControl = () => {
    fetch("http://localhost:5000/userpage", {
      method: "GET",
      Accept: "application/json",
      headers: {
        Authorization: `Bearer ${localStorage.userToken}`,
      },
    })
      .then((data) => data.json())
      .then((data)=>console.log(data))
      .then((data) => {
        user.isAdmin === true  ? 
        setadminPermission(true) : setadminPermission(false)});
  };

  userPagePermissionControl();

  console.log(adminPermission);

  return (
    <div>
      <Header />
      <AdminNav />
      {adminPermission ? (
        <div
          className=" d-flex justify-content-center align-items-center  text-center"
          style={{ height: "50vh", fontSize: "2rem" }}
        >
          <div>
            What would do you as Admin? You can use Admin Navigate(ADD, DELETE
            or EDIT)
          </div>
        </div>
      ) : (
        "You are not authorized! "
      )}

      <Footer />
    </div>
  );
}

export default AdminPage;
