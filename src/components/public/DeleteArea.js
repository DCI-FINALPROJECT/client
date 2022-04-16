import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataStore } from "../../DataStore";
import DeleteHeader from "../public/DeleteHeader";
import DeleteTemplate from "../public/DeleteTemplate";
import Footer from "../public/Footer";

function DeleteArea() {
  const { allProducts } = useContext(DataStore);

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
      <div className="d-flex flex-column flex-wrap justify-content-center container">
        <h3 className="my-3">Searched Product</h3>
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
              return <DeleteTemplate key={product._id} product={product} />;
            })}
          </div>
        )}
      </div>

      <div className="d-flex flex-wrap justify-content-center flex-column container">
        <h3 className="my-3">All Product</h3>
        <div className="d-flex flex-wrap justify-content-center">
          {allProducts.map((product) => {
            return <DeleteTemplate key={product._id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default DeleteArea;
