import React from 'react'
import Banner from '../public/Banner';
import BannerCategories from '../public/BannerCategories';
import Carrousel1 from '../public/Carrousel1';
import Carrousel2 from '../public/Carrousel2';
import Footer from '../public/Footer';
import Header from '../public/Header';
import LoginPage from './LoginPage';
import PaymentPage from './PaymentPage';
import RegisterPage from './RegisterPage';

function Homepage() {
  return (
    <div>
      <Header />
      <br/><br/>

      <BannerCategories />
      <br/><br/>
      <Carrousel1 />
      <br/><br/>
      <Banner />
      <br/><br/>
      <Carrousel2 />
      <br/><br/>

      <Footer/>  
     </div>
  )
}

export default Homepage;