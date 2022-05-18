import React, { useState,useContext } from "react";
import { DataStore } from "../../DataStore";
import AdminNav from "../public/AdminNav";
import DeleteArea from "../public/DeleteArea";
import DeleteHeader from "../public/DeleteHeader";
import Footer from "../public/Footer";
import NotAuthorize from "../public/NotAuthorize";

function DeletePage() {
  const [adminPermission, setadminPermission] = useState(null);

  const { user} = useContext(DataStore);

  const userPagePermissionControl = () => {
    fetch("https://smartshopdcifinal.herokuapp.com/userpage", {
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

  return (
    <div>
      <DeleteHeader />
      <AdminNav/>

      {adminPermission ? <DeleteArea /> : <NotAuthorize/>}

      <Footer />
    </div>
  );
}

export default DeletePage;
