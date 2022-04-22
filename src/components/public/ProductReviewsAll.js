import React, { useState, useEffect, useContext } from "react";
import ProductReview from "./ProductReview";
import { useParams } from "react-router-dom";
import { DataStore } from "../../DataStore";
import { Rating } from "react-simple-star-rating";
import ReviewAlert from "./ProductReviewAlert";

export default function ProductReviewsAll() {
  const { user, productById, setProductStars } = useContext(DataStore);

  console.log(user);

  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const [starPoints, setStarPoints] = useState(0);
  const [reviewAdded, setReviewAdded] = useState(1);
  const [isTextAreaEmpty, setTextAreaEmpty] = useState(false);

  const [rating, setRating] = useState(0);

  const getReviewsByProductName = async () => {
    await fetch(`http://localhost:5000/review/${productById.productName}`)
      .then((data) => data.json())
      .then((data) => {
        let review = 0;
        let index = 0;
        data.forEach((element) => {
          review += element.star;
          index++;
        });
        review > 0 ? setProductStars(review / index) : setProductStars(0);
        setReviews(data);
      });
  };

  useEffect(() => {
    getReviewsByProductName();
  }, [params.id, reviewAdded, productById.productName]);

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

  const sendReview = async (e) => {
    e.preventDefault();

    let messageBox = document.querySelector("#messageBox").value;

    if (messageBox.length === 0) {
      setTextAreaEmpty(true);
    } else {
      setTextAreaEmpty(false);
      const newReview = {
        name: (await user.firstName) + " " + (await user.lastName),
        productName: productById.productName,
        review: messageBox,
        star: rating,
        photo: await user.photo,
      };

      await fetch("http://localhost:5000/review/addReview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.userToken}`,
        },
        body: JSON.stringify(newReview),
      });
      
      setReviewAdded(reviewAdded + 1);
    }

  };

  const handleRating = (rate = 0) => {
    setRating(rate);
    // other logic
  };

  return (
    <div>
      <div className="">
        <div className="card mb-4" bis_skin_checked="1">
          <div className="card-body" bis_skin_checked="1">
            <h5 className="card-title">Reviews </h5>
            {reviews.length > 0 ? (
              <div>
                <ul className="rating-stars">
                  <li
                    style={{ width: `${starPoints / reviews.length}%` }}
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
                  {(starPoints / reviews.length).toFixed(0)}% -
                  <span>{reviews.length} reviews</span>
                </strong>

                <hr />
              </div>
            ) : (
              "There are not any comment about this product!"
            )}

            {reviews.map((review) => {
              return <ProductReview key={review.key} review={review} />;
            })}

            {user.firstName ? (
              <div class="card-body">
                <h5 class="card-title">Your review about the product </h5>
                <form onSubmit={sendReview}>
                  <div class="mb-3">
                    <textarea
                      class={`form-control ${isTextAreaEmpty && "is-invalid"}`}
                      placeholder="Type here"
                      spellcheck="false"
                      id="messageBox"
                    ></textarea>
                  </div>

                  <div className="d-flex flex-column">
                    <label>
                      Your point:{" "}
                      <Rating
                        onClick={handleRating}
                        ratingValue={rating} /* Available Props */
                      />
                    </label>
                    <button type="submit" class="btn btn-primary">
                      Send your opinion
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <ReviewAlert />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
