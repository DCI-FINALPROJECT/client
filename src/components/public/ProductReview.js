
import React from "react";

function ProductReview({ review }) {
  return (
    <blockquote className="border-bottom">
      <div className="icontext d-flex" bis_skin_checked="1">
        <img
          className="img-xs icon rounded-circle"
          alt=""
          src={review.photo}
        />
        <div className="text" bis_skin_checked="1">
          <h6 className="mb-0"> {review.name} </h6>
          <div className="rating-wrap my-3" bis_skin_checked="1">
            <ul className="rating-stars">
              <li
                style={{ width: `${review.star}%` }}
                className="stars-active"
              >
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </li>
            </ul>
            <i className="dot">-</i>

            <i className="dot">
              {review.star / 20 < 2
                ? "Bad"
                : review.star / 20 < 4
                ? "Ok"
                : review.star / 20 < 5
                ? "Gut"
                : "Super"}
            </i>
          </div>
        </div>
        <div
          className="d-flex justify-content-end"
          
        >
          {review.date.toString()}
        </div>
      </div>
      <div className="mt-3" bis_skin_checked="1">
        <p>{review.content}</p>
      </div>
    </blockquote>
  );
}

export default ProductReview;
