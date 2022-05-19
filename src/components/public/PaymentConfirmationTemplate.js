import React from "react";

function PaymentConfirmationTemplate({status}) {

  console.log(status);
  return (
    <div className="bg">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="card-body">
              <div
                className="mt-4 mx-auto text-center"
                style={{ maxWidth: "600px" }}
              >
                <span className="icon icon-confirm">
                  <i className="fa fa-check"></i>
                </span>
                <div className="my-3 mt-5">
                  <h4>Thank you for order</h4>
                </div>
              </div>
              <p>
                Some information will be written here, bla bla lorem ipsum you
                enter into any new area of science, you almost always find
                yourself
              </p>
              <div className="tracking-wrap">
                <div className="step active">
                  <span className="icon">
                    <i className="fa fa-check"></i>
                  </span>
                  <span className="text">Order received</span>
                </div>
                <div className={`step ${status.length === 2 && "active"}`}>
                  <span className="icon">
                    <i className="fa fa-user"></i>
                  </span>
                  <span className="text"> Shipped</span>
                </div>
                <div className="step ">
                  <span className="icon">
                    <i className="fa fa-truck"></i>
                  </span>
                  <span className={`step ${status.length === 3 && "active"}`}>Delivery </span>
                </div>
                <div className="step">
                  <span className="icon">
                    <i className="fa fa-home"></i>
                  </span>
                  <span className={`step ${status.length === 4 && "active"}`}>Complete </span>
                </div>
              </div>
              <br />
            </div>
            <article className="card"> </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentConfirmationTemplate;
