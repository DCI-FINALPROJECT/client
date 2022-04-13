import React, { useState, useEffect } from "react";
import ProductReview from "./ProductReview";
import { useParams } from "react-router-dom";

export default function ProductReviewsAll() {
  const [reviews, setReviews] = useState([]);
  const params = useParams();

  const getReviewsByProductId = () => {
    fetch(`http://localhost:5000/review/${params.id}`)
      .then((data) => data.json())
      .then((data) => setReviews(data));
  };

  useEffect(() => {
    getReviewsByProductId();
  }, []);

  console.log(reviews);

  return (
    <div>
      <div className="">
        <div className="card mb-4" bis_skin_checked="1">
          <div className="card-body" bis_skin_checked="1">
            <h5 className="card-title">Reviews </h5> <hr />
            {reviews.map((review) => {
              return <ProductReview key={review.key} review={review} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
