import React from "react";
import ProductCard from "./ProductCard";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReviewsAll";
import SimilarProducts from "./SimilarProducts";

export default function ProductTemplate() {
  
  return (
    <div className="container pt-5">
      <ProductCard />
      <h3 className='text-center'>SIMILAR PRODUCTS</h3>
      <SimilarProducts />
     {/*  <ProductDescription /> */}
      <ProductReview />

    </div>
  );
}
