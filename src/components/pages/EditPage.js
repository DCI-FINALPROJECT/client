import React, { useContext, useState } from "react";
import { DataStore } from "../../DataStore";
import AdminNav from "../public/AdminNav";
import EditTemplate from "../public/EditTemplate";
import Footer from "../public/Footer";
import Header from "../public/Header";
import NotAuthorize from "../public/NotAuthorize";

export default function EditPage() {
  const { user } = useContext(DataStore);
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
      .then((data) => console.log(data))
      .then(() => {
        user.isAdmin === true
          ? setadminPermission(true)
          : setadminPermission(false);
      });
  };

  userPagePermissionControl();
  return (
    <div>
      <Header />
      <AdminNav />
      {adminPermission ? <EditTemplate /> : <NotAuthorize/>}
      <Footer />
    </div>
  );
}
