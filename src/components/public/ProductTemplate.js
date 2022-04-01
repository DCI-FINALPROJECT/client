import React from "react";
import ProductCard from "./ProductCard";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";

export default function ProductTemplate() {
  return (
    <div>
      <ProductCard />
      <ProductDescription />
      <ProductReview />
    </div>
  );
}
