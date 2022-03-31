import React from "react";
import ProductCard from "./ProductCard";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";

export default function ProductTemplate() {
  return (
    <div>
      <ProductCard />
      <div className="container pt-5">
        
          <ProductDescription />

          <ProductReview />
        
      </div>
    </div>
  );
}
