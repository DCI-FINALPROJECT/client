import React from "react";

function PaymentConfirmationTemplate() {
  return (
    <div className="bg">
    <div className="container pt-5 pb-5">
      <div className="row">
        <div className="col-lg-8">
          <div className="card-body">
            <div className="mt-4 mx-auto text-center" style={{ maxWidth: "600px" }}>
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
              <div className="step active">
                <span className="icon">
                  
                  <i className="fa fa-user"></i>
                </span>
                <span className="text"> Confirmation</span>
              </div>
              <div className="step">
                <span className="icon">
                  
                  <i className="fa fa-truck"></i>
                </span>
                <span className="text">Delivery </span>
              </div>
            </div>
            <br />
          </div>
          <article className="card"> </article>
        </div>
        <aside className="col-lg-4">
          <article className="card">
            <div className="card-body">
              <h5 className="card-title"> Receipe </h5>
              <div className="itemside mb-3">
                <div className="aside">
                  <span className="icon-sm text-primary bg-primary-light rounded">
                    <i className="fab fa-lg fa-paypal"></i>
                  </span>
                </div>
                <div className="info lh-sm">
                  <strong>Order ID: 2313440</strong> <br />
                  <span className="text-muted">Wed, Sept 13, 2021</span>
                </div>
              </div>
              <dl className="dlist-align">
                <dt>Method:</dt> <dd>Visa - - - - 9902</dd>
              </dl>
              <dl className="dlist-align">
                <dt>Billed to:</dt> <dd>Akhmed Khasan</dd>
              </dl>
              <dl className="dlist-align">
                <dt>Fee:</dt> <dd>$2.00</dd>
              </dl>
              <dl className="dlist-align">
                <dt>Paid:</dt> <dd>$135.00</dd>
              </dl>
              <hr />
              <a href="#" className="btn btn-light">
                Download invoice
              </a>
            </div>
          </article>
        </aside>
      </div>
    </div>
    </div>
  );
}

export default PaymentConfirmationTemplate;
