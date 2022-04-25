import React, { useState } from 'react'
import AdminNav from '../public/AdminNav'
import AddProductTemplate from '../public/AddProductTemplate'
import Footer from '../public/Footer'
import Header from '../public/Header'

function AddProductPage() {
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
        <Header/>
        <AdminNav/>
      {adminPermission ? <AddProductTemplate/> : "You are not authorized! "}
        <Footer/>
    </div>
  )
}

export default AddProductPage