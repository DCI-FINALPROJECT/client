import React from 'react'
import Footer from '../public/Footer';
import Header from '../public/Header';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

function Homepage() {
  return (
    <div>
      <Header />
    <RegisterPage/>
      <LoginPage/>
      <Footer/>  
      
     </div>
  )
}

export default Homepage;