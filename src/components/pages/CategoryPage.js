import React, { useContext } from "react";
import Footer from "../public/Footer";
import Header from "../public/Header";
import { DataStore } from "../../DataStore";
import { useParams } from "react-router-dom";
import SearchTemplate from "../public/SearchTemplate";
import CategoryFilter from "../public/CategoryFilter";
import CategoryProducts from "../public/CategoryProducts";
import CategoryInfo from "../public/CategoryInfo";
import Deneme from "../public/Deneme";

function CategoryPage() {
  return (
    <div className="container">
      <Header />
      <CategoryInfo/>
{/*       <div className="row">
        <div className="col-3">
          <CategoryFilter />
        </div>
        <div className="col-9">
          <CategoryProducts />
        </div>
      </div> */}

      <Deneme/>

      <Footer />
    </div>
  );
}

export default CategoryPage;
