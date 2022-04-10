import React from "react";
import Banner1 from "../public/Banner1";
import Banner2 from "../public/Banner2";
import Banner3 from "../public/Banner3";
import BannerCategories from "../public/BannerCategories";
import Carrousel1 from "../public/Carrousel1";
import Carrousel2 from "../public/Carrousel2";
import Footer from "../public/Footer";
import Header from "../public/Header";
import HomeInfos from "../public/HomeInfos";

function Homepage() {
  return (
    <div>
      <Header />
      <Banner1 />
      <div className="bg">
        <br />
        <br />
        <BannerCategories />
        <br />
        <br />
        <h1>New Products</h1>
        <Carrousel1 />
        <br />
        <br />
        <Banner2 />
        <br />
        <br />
        <h1>Best Sellers</h1>
        <Carrousel2 />
        <br />
        <br />
        <Banner3 />
        <HomeInfos />
       </div>
      <Footer />
    </div>
  );
}

export default Homepage;
