import React, { useState } from "react";
import Footer from "../public/Footer";
import Header from "../public/Header";
import UserPageTemplate from "../public/UserPageTemplate";

function UserPage() {
  const [userPermission, setUserPermission] = useState(null);

  const userPagePermissionControl = () => {
    const resp = fetch("http://localhost:5000/userpage", {
      method: "GET",
      Accept: "application/json",
      headers: {
        Authorization: `Bearer ${localStorage.userToken}`,
      },
    })
      .then((data) => data.json())
      .then((data) => setUserPermission(data.status));
  };

  userPagePermissionControl();

  return (
    <div>
      <Header />
      {userPermission ? <UserPageTemplate /> : "You are not authorized! "}
      <Footer />
    </div>
  );
}

export default UserPage;
