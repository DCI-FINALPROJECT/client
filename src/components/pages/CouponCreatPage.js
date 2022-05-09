import React, { useState } from 'react'
import AdminNav from '../public/AdminNav'
import Footer from '../public/Footer'
import Header from '../public/Header'
import CouponCreatTemplate from '../public/CouponCreatTemplate'
function CouponCreatPage() {

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
      {adminPermission ? <CouponCreatTemplate/> : "You are not authorized! "}
        <Footer/>
    </div>
  )
}

export default CouponCreatPage