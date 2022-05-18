import React, { useState } from "react";

function CouponCreatTemplate() {

    const [howMuchCoupon, setHowMuchCoupon] = useState(1)
    const [couponAmount, setCouponAmount] = useState(0)

    async function submitHandler(e) {
        e.preventDefault();

        if(couponAmount>0){

            const response = await fetch("https://smartshopdcifinal.herokuapp.com/admin/postCoupon", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.userToken}`,
              },
              body: JSON.stringify({howMuchCoupon,couponAmount}),
            })
            const status = await response.status
            console.log(status);
            response.json().then((data)=>{alert(data.message)
            })
        }else{
            alert("Coupon Amount not entered")
        }
    
      }
  return (
    <div className="bg" style={{height:"700px"}} >
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="card m-auto" style={{ width: "50%" }}>
            <article className="card-body">
              <h4 className="mb-4">Creat Coupon</h4>
              <form
              onSubmit={submitHandler}>
                {/* How much Coupon */}
                <div className="row mb-4">
                  <label className="col-md-3 col-form-label">
                    How much Coupon
                  </label>
                  <div className="col-9">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Type here"
                      name="howMuchCoupon"
                      onChange={(e)=>{ 
                        setHowMuchCoupon(e.target.value)}}
                    />
                  </div>
                </div>
                {/* Coupon Amount*/}
                <div className="row mb-4">
                  <label className="col-md-3 col-form-label"> Coupon Amount</label>
                  <div className="col-9">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Type here"
                      name="couponAmount"
                      onChange={(e)=>{setCouponAmount(e.target.value)}}
                    />
                  </div>
                </div>
                  <div className=" d-flex justify-content-center align-items-center">
                    <button type="submit" className="btn btn-primary ">
                      Create Coupon
                    </button>
                    
                  </div>
              </form>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CouponCreatTemplate;
