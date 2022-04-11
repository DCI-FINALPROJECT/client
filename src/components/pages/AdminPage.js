import React from 'react'
import { Link } from 'react-router-dom'
import AdminTemplate from '../public/AdminTemplate'
import Footer from '../public/Footer'
import Header from '../public/Header'

function AdminPage() {
    return (
        <div>
            <Header/>
            <AdminTemplate/>
            
            <Footer/>
        
        </div>
    )
}

export default AdminPage
