import React, { useState } from "react";
import AdminNav from "../public/AdminNav";
import DeleteArea from "../public/DeleteArea";
import DeleteHeader from "../public/DeleteHeader";
import Footer from "../public/Footer";

function DeletePage() {
  const [adminPermission, setadminPermission] = useState(null);

  const userPagePermissionControl = () => {
    const resp = fetch(`http://localhost:5000/userpage`, {
      method: "GET",
      Accept: "application/json",
      headers: {
        Authorization: `Bearer ${localStorage.userToken}`,
      },
    })
      .then((data) => data.json())
      .then((data) => setadminPermission(data.status));
  };

  userPagePermissionControl();

  return (
    <div>
      <DeleteHeader />
      <AdminNav/>

      {adminPermission ? <DeleteArea /> : "You are not authorized! "}

      <Footer />
    </div>
  );
}

export default DeletePage;
