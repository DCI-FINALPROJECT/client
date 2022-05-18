
import React, { useEffect, useState } from 'react'
import { Cookies, useCookies } from 'react-cookie';


function GiftCard() {
  const [cookies, setCookies] = useCookies(["cart"]);


  const [allCoupon, setAllCoupon] = useState([]) 

  const getAllCoupon = async() => {
    const response = await fetch(`https://smartshopdcifinal.herokuapp.com/allcoupons`, {
      method: "GET",
      Accept: "application/json",
      headers: {
        Authorization: `Bearer ${localStorage.userToken}`,
      },
    });
    const couponsResponse = await response.json();
    setAllCoupon(couponsResponse);
  }

  useEffect(() => {
    getAllCoupon()
  }, []);


  console.log(allCoupon);


  const filteredCoupon = allCoupon.filter((coupon)=> {

    return coupon.isUsed===false && coupon.isBuy===false
  }
  )

  console.log(filteredCoupon);
  

    const addToCart = async (e) => {


      const couponId=e.target.name;
      console.log("id", couponId);
      const coupon = filteredCoupon.filter((coupon)=>{ return coupon._id===couponId})
      let array = (await new Cookies().get("cart")) || [];

      console.log(coupon);
      
     array.push({
      id: coupon[0]._id,
      quantities: 1,
      color:"",
      capacity: coupon[0].giftNumber,
      price: coupon[0].couponAmount,
      image: "https://beerginvino.com/wp-content/uploads/2021/11/giftcard-1.jpg",
    })
      setCookies("cart", array, { path: "/" }); // We can get the cookies with 3. parameter.
      
    };


  return (
    <div className='d-flex flex-wrap justify-content-center container'>

        {filteredCoupon.map((card)=>{
            return(

                <div className=" card-product-grid m-3">
                
                    <div className="img-wrap pt-2" style={{height:"170px"}} >
                      <img src={"https://beerginvino.com/wp-content/uploads/2021/11/giftcard-1.jpg"} style={{height:"160px"}} alt="" />
                    </div>
                    <div className="info-wrap">
                        <h4 className='card-title'> Gift Card</h4>
                        <h5 className="text-muted">{card.giftNumber}</h5>
                      <div className="price-wrap">
                        <strong className="price text-muted">Card Amount: {card.couponAmount} €</strong>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                      <button
                    onClick={
                        addToCart
                    }
                    className="btn btn-yellow mx-2"
                    name={card._id}
                    
                  >
                    <i className="me-2 fa fa-shopping-basket"></i> Add to cart
                  </button>
                        
                      </div>
                    </div>
                  </div>
            )
        })}

       
    </div>
  );
}

export default GiftCard;
