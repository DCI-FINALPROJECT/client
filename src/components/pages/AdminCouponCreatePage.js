import React, { useState,useContext } from 'react'
import AdminNav from '../public/AdminNav'
import Footer from '../public/Footer'
import Header from '../public/Header'
import CouponCreatTemplate from '../public/CouponCreatTemplate'
import { DataStore } from '../../DataStore'
import NotAuthorize from '../public/NotAuthorize'
function CouponCreatPage() {

  const { user} = useContext(DataStore);
  const [adminPermission, setadminPermission] = useState(null);

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
         <Header/>
        <AdminNav/>
      {adminPermission ? <CouponCreatTemplate/> : <NotAuthorize/>}
        <Footer/>
    </div>
  )
}

export default CouponCreatPage