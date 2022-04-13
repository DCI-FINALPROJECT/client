import React from "react";

function ProductReview({ review }) {
  return (
    <blockquote className="border-bottom">
      <div className="icontext d-flex" bis_skin_checked="1">
        <img
          src="images/avatars/avatar2.jpg"
          className="img-xs icon rounded-circle"
          alt=""
        />
        <div className="text" bis_skin_checked="1">
          <h6 className="mb-0"> {review.name} </h6>
          <div className="rating-wrap my-3" bis_skin_checked="1">
            <ul className="rating-stars">
              <li
                style={{ width: `${review.star * 20}%` }}
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
              {review.star < 2
                ? "Bad"
                : review.star < 4
                ? "Ok"
                : review.star < 5
                ? "Gut"
                : "Super"}
            </i>
          </div>
        </div>
        <div
          className="d-flex justify-content-end"
          style={{ minWidth: "250px" }}
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
