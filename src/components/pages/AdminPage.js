import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminTemplate from '../public/AdminTemplate'
import Footer from '../public/Footer'
import Header from '../public/Header'

function AdminPage() {
    const [adminPermission,setadminPermission] = useState(null)

    const userPagePermissionControl = () =>{

        const resp = fetch("http://localhost:5000/userpage",{
            method: "GET",
            Accept: "application/json",
            headers: {
              Authorization: `Bearer ${localStorage.userToken}`,
            },
          }).then(data=>data.json()).then(data=>setadminPermission(data.status))
    }

    userPagePermissionControl();

    return (
        <div>
            <Header/>
            {
                adminPermission ?  <AdminTemplate/> : "You are not authorized! "

            }
            
            <Footer/>
        
        </div>
    )
}

export default AdminPage
