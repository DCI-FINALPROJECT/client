import React from "react";
import Footer from "../public/Footer";
import Header from "../public/Header";
import ProductTemplate from "../public/ProductTemplate";
import { useContext, useEffect, useState } from "react";
import { DataStore } from "../../DataStore";
import { useParams } from "react-router-dom";
import ProductInfo from "../public/ProductInfo";

export default function ProductPage() {
  const { productById,setProductById,clicked } = useContext(DataStore);

  const params = useParams();

  const id = params.id;
 

  function getProductById() {
    fetch(`http://localhost:5000/product/${id}`)
      .then((data) => data.json())
      .then((data) => setProductById(data));
  }

  useEffect(() => {
    getProductById();
  }, [clicked]);


  return (
    <div>
      <Header />
      <ProductInfo product={productById} />
      <ProductTemplate product={productById} />
      <Footer />
    </div>
  );
}
