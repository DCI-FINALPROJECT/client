import React, { useContext, useEffect } from "react";
import { DataStore } from "../../DataStore";
import Footer from "../public/Footer";
import Header from "../public/Header";
import SearchTemplate from "../public/SearchTemplate";
import { useParams } from "react-router-dom";

function SearchPage() {
  const { allProducts, setAllProducts } = useContext(DataStore);

  const params = useParams();

  const productName = params.productName;


  const loadProducts = async () => {
    const response = await fetch(`http://localhost:5000/products/all`);
    const productsResponse = await response.json();
    setAllProducts(productsResponse);
  };

  useEffect(() => {
    (async () => {
      await loadProducts();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


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
          <div className="container row-12  d-flex align-items-center justify-content-center shadow my-5">
            {/* <div className="col-3" ><img src={dog} className="dog" alt="" /></div> */}
            <div className="col-5">
              <h2>
                Ooo schade... <br /> Product wurde nicht gefunden
              </h2>
            </div>
          </div>
        ) : (
          <div className="d-flex flex-wrap justify-content-center">
            {searchedProducts.map((product) => {
              return <SearchTemplate key={product._id} product={product} />;
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default SearchPage;
