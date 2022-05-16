import React, { useContext } from "react";
import Footer from "../public/Footer";
import Header from "../public/Header";
import CategoryFilter from "../public/CategoryFilter";
import CategoryProducts from "../public/CategoryProducts";
import CategoryInfo from "../public/CategoryInfo";

function CategoryPage() {
  return (
    <div className="">
      <Header />
      <div className="container">
        <CategoryInfo />
        <div className="row py-2">
          <CategoryFilter />
          <CategoryProducts />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CategoryPage;
