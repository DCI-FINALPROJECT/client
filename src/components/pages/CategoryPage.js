import React, { useContext } from "react";
import Footer from "../public/Footer";
import Header from "../public/Header";
import CategoryFilter from "../public/CategoryFilter";
import CategoryProducts from "../public/CategoryProducts";
import CategoryInfo from "../public/CategoryInfo";

function CategoryPage() {
  return (
    <div className="container">
      <Header />
      <CategoryInfo />
      <div className="row">
        <CategoryFilter />
        <CategoryProducts />
      </div>
      <Footer />
    </div>
  );
}

export default CategoryPage;
