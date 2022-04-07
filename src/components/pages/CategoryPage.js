import React, { useContext } from "react";
import Footer from "../public/Footer";
import Header from "../public/Header";
import { DataStore } from "../../DataStore";
import { useParams } from "react-router-dom";
import SearchTemplate from "../public/SearchTemplate";

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
    <div>
      <Header />
      {
        <div className="d-flex flex-wrap justify-content-center">
          {categoriedProducts.map((product) => {
            return <SearchTemplate key={product._id} product={product} />;
          })}
        </div>
      }

      <Footer />
    </div>
  );
}

export default CategoryPage;
