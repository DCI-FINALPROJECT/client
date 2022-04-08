import React, { useContext } from "react";
import Footer from "../public/Footer";
import Header from "../public/Header";
import { DataStore } from "../../DataStore";
import { useParams } from "react-router-dom";
import SearchTemplate from "../public/SearchTemplate";
import CategoryFilter from "../public/CategoryFilter";

function CategoryPage() {
  const { allProducts } = useContext(DataStore);

  const params = useParams();

  const category = params.category;

  let categoriedProducts = allProducts.filter((product) => {
    return (
      product.category.toLowerCase().indexOf(category.toLowerCase()) !== -1
    );
  });

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-3">
          <CategoryFilter />
        </div>

        <div className="col-9">
          {
            <div className="d-flex flex-wrap justify-content-center">
              {categoriedProducts.map((product) => {
                return <SearchTemplate key={product._id} product={product} />;
              })}
            </div>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CategoryPage;
