import React from "react";
import Carrousel1 from "./Carrousel1";
import ProductCard from "./ProductCard";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";

export default function ProductTemplate() {
  return (
    <div className="container pt-5">
      <ProductCard />
      <h3 className='text-center'>SIMILAR PRODUCTS</h3>
      <Carrousel1/>
      <ProductDescription />
      <ProductReview />

    </div>
  );
}
