import React, { useState } from "react";
import { Cookies, useCookies } from "react-cookie";

function GiftCard() {
  const [cookies, setCookies] = useCookies(["cart"]);

  const giftCard = [
    { name: "GC20", amount: 20 },
    { name: "GC25", amount: 25 },
    { name: "GC50", amount: 50 },
    { name: "GC100", amount: 100 },
  ];

  const addToCart = async (e) => {
    const couponName = e.target.name;
    let array = (await new Cookies().get("cart")) || [];

    const couponAmount = couponName.slice(2);
    array.push({
      id: "",
      quantities: 1,
      color: "",
      capacity: couponName,
      price: couponAmount,
      image:
        "https://beerginvino.com/wp-content/uploads/2021/11/giftcard-1.jpg",
    });
    setCookies("cart", array, { path: "/" }); // We can get the cookies with 3. parameter.
  };

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center m-5 ">
      {giftCard.map((card) => {
        return (
          <div className=" card-product-grid m-3">
            <div className="img-wrap" style={{ height: "170px" }}>
              <img
                src={
                  "https://beerginvino.com/wp-content/uploads/2021/11/giftcard-1.jpg"
                }
                style={{ height: "170px" }}
                alt=""
              />
            </div>
            <div className="info-wrap">
              <h4 className="card-title"> Gift Card</h4>
              <h5 className="text-muted">{card.name}</h5>
              <div className="price-wrap">
                <strong className="price text-muted">
                  Card Amount: {card.amount} €
                </strong>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <button
                  onClick={addToCart}
                  className="btn btn-yellow mx-2"
                  name={card.name}
                >
                  <i className="me-2 fa fa-shopping-basket"></i> Add to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GiftCard;
