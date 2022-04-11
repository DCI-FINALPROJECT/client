import React from "react";
import ProductReview from "./ProductReview";

export default function ProductReviewsAll() {
  return (
    <div>
      <div className="">
        <div className="card mb-4" bis_skin_checked="1">
          <div className="card-body" bis_skin_checked="1">
            <h5 className="card-title">Reviews </h5> <hr />
          
          <ProductReview/>
          <ProductReview/>
          <ProductReview/>
          <ProductReview/>
           
           
          </div>
        </div>
      </div>
    </div>
  );
}
