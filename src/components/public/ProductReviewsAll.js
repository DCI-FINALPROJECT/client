import React, { useState, useEffect,useContext } from "react";
import ProductReview from "./ProductReview";
import { useParams } from "react-router-dom";
import { DataStore } from "../../DataStore";

export default function ProductReviewsAll() {

  const { setProductStars } = useContext(DataStore);

  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const [starPoints, setStarPoints] = useState(0);


  const getReviewsByProductId = () => {
    fetch(`http://localhost:5000/review/${params.id}`)
      .then((data) => data.json())
      .then((data) => {
        let review = 0;
        let index = 0;
        data.forEach(element=>{
          review += element.star;
          index ++;
        })
        review > 0 ? setProductStars(review/index) : setProductStars(0);
        setReviews(data)}
        )
  };

  useEffect(() => {
    getReviewsByProductId();
  }, [params.id]);

  useEffect(() => {

    const avarageStarPoints = () => {
      let points = 0;

      if (reviews.length > 0) {
        for (let i = 0; i < reviews.length; i++) {
          points += reviews[i].star;
        }
      }
      return points;
    };

    setStarPoints(avarageStarPoints());
  }, [reviews]);
  



  return (
    <div>
      <div className="">
        <div className="card mb-4" bis_skin_checked="1">
          <div className="card-body" bis_skin_checked="1">
            <h5 className="card-title">Reviews </h5>
            {

              reviews.length>0 ? 

              <div>
            <ul className="rating-stars">
              <li
                style={{ width: `${(starPoints/reviews.length)*20}%` }}
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

            <strong className="label-rating text-lg">
              
              {(starPoints / reviews.length).toFixed(1)} -
              <span>{reviews.length} reviews</span>
            </strong>

            <hr />
            </div> : "There are not any comment about this product!"

            }

           
            {reviews.map((review) => {
              return <ProductReview key={review.key} review={review} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
