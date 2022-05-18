import React, { useState } from "react";
import Footer from "../public/Footer";
import Header from "../public/Header";
import NotAuthorize from "../public/NotAuthorize";
import UserPageTemplate from "../public/UserPageTemplate";

function UserPage() {
  const [userPermission, setUserPermission] = useState(null);

  const userPagePermissionControl = () => {
    const resp = fetch("https://smartshopdcifinal.herokuapp.com/userpage", {
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
      {userPermission ? <UserPageTemplate /> : <NotAuthorize/>}
      <Footer />
    </div>
  );
}

export default UserPage;
