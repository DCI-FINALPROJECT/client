import React, { useContext, useEffect } from "react";
import { DataStore } from "../../DataStore";
import Footer from "../public/Footer";
import Header from "../public/Header";
import { useParams } from "react-router-dom";
import ProductCardCarrousel from "../public/ProductCardCarrousel";

function SearchPage() {
  const { allProducts, setAllProducts } = useContext(DataStore);

  const params = useParams();

  const productName = params.productName;





  let searchedProducts = allProducts.filter((product) => {
    return (
      product.productName.toLowerCase().indexOf(productName.toLowerCase()) !==
      -1
    );
  });


  return (
    <div>
      <Header />

      <div className="d-flex flex-wrap justify-content-center">
        {searchedProducts.length === 0 ? (
         <div className=" d-flex flex-column flex-wrap justify-content-center container">

            <div className="d-flex align-items-center auth p-2 my-5" style={{width:"90%", height:"8rem"}} >
            <h3 className="ml-sm-5" >
                 Product is not found <br/> <span className="text-muted"> Search a new product </span>
              </h3>
            </div>
         </div>
          
        ) : (
          <div className="d-flex flex-wrap justify-content-center container">
            {searchedProducts.map((product) => {
              return <ProductCardCarrousel key={product._id} product={product} />;
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default SearchPage;
