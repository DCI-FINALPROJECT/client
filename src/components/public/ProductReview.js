import React from 'react'

function ProductReview({review}) {
  return (
    <blockquote className="border-bottom">
    <div className="float-lg-end d-flex mb-3" bis_skin_checked="1">
      <div
        className="btn-group d-inline-flex me-2"
        bis_skin_checked="1"
      >
        <button
          className="btn btn-light btn-sm float-end"
          data-bs-toggle="tooltip"
          data-bs-title="Like"
        >
          <i className="fa fa-thumbs-up"></i>
        </button>
        <button
          className="btn btn-light btn-sm float-end"
          data-bs-toggle="tooltip"
          data-bs-title="Dislike"
        >
          <i className="fa fa-thumbs-down"></i>
        </button>
      </div>
      <button className="btn btn-light btn-sm float-end ">
        <i className="fa fa-ellipsis-v"></i>
      </button>
    </div>
    <div className="icontext" bis_skin_checked="1">
      <img
        src="images/avatars/avatar2.jpg"
        className="img-xs icon rounded-circle"
      />
      <div className="text" bis_skin_checked="1">
        <h6 className="mb-0"> {review.name} </h6>
        <div className="rating-wrap my-3" bis_skin_checked="1">
                 
                 <ul className="rating-stars">
                   <li
                     style={{ width: `${review.star*20}%` }}
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
                 <i className="dot">{review.stars}</i>
                 <span className="label-rating text-muted">
                   <i className="fa fa-shopping-basket"></i>{" "}
                   {review.sales} orders
                 </span>
                 <i className="dot"></i>
                 <span className="label-rating text-success">Verified</span>
               </div>
      </div>
    </div>
    <div className="mt-3" bis_skin_checked="1">
      <p>
        {review.content}
      </p>
    </div>
  </blockquote>
  )
}

export default ProductReview;