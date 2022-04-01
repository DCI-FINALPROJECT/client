import React from "react";
import ProductCard from "./ProductCard";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";

export default function ProductTemplate() {
  return (
    <div className="container pt-5">
      <ProductCard />
      <ProductDescription />
      <ProductReview />

    </div>
  );
}
