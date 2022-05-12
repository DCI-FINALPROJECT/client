import React, { useState,useContext } from 'react'
import AdminNav from '../public/AdminNav'
import AddProductTemplate from '../public/AddProductTemplate'
import Footer from '../public/Footer'
import Header from '../public/Header'
import { DataStore } from '../../DataStore'

function AddProductPage() {

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