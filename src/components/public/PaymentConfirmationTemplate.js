import React from "react";

function PaymentConfirmationTemplate() {
  return (
    <div class="container pt-5 pb-5">
      <div class="row">
        <div class="col-lg-8">
          <div class="card-body">
            <div class="mt-4 mx-auto text-center" style={{ maxWidth: "600px" }}>
              <i class="fa-solid fa-circle-check"></i>
              <div class="my-3">
                
                <h4>Thank you for order</h4>
              </div>
            </div>
            <p>
              Some information will be written here, bla bla lorem ipsum you
              enter into any new area of science, you almost always find
              yourself
            </p>
            <ul class="steps-wrap mx-auto" style={{ maxWidth: "600px" }}>
              
              <li class="step active">
                <span class="icon">1</span>
                <span class="text">Order received</span>
              </li>
              <li class="step ">
                <span class="icon">2</span>
                <span class="text">Confirmation</span>
              </li>
              <li class="step ">
                <span class="icon">3</span> <span class="text">Delivery</span>
              </li>
            </ul>
            <br />
          </div>
          <article class="card"> </article>
        </div>
        <aside class="col-lg-4">
          <article class="card">
            
            <div class="card-body">
           
              <h5 class="card-title"> Receipe </h5>
              <div class="itemside mb-3">
               
                <div class="aside">
              
                  <span class="icon-sm text-primary bg-primary-light rounded">
                    <i class="fab fa-lg fa-paypal"></i>
                  </span>
                </div>
                <div class="info lh-sm">
                
                  <strong>Order ID: 2313440</strong> <br />
                  <span class="text-muted">Wed, Sept 13, 2021</span>
                </div>
              </div>
              <dl class="dlist-align">
          
                <dt>Method:</dt> <dd>Visa - - - - 9902</dd>
              </dl>
              <dl class="dlist-align">
               
                <dt>Billed to:</dt> <dd>Akhmed Khasan</dd>
              </dl>
              <dl class="dlist-align">
                
                <dt>Fee:</dt> <dd>$2.00</dd>
              </dl>
              <dl class="dlist-align">
                
                <dt>Paid:</dt> <dd>$135.00</dd>
              </dl>
              <hr />
              <a href="#" class="btn btn-light">
                Download invoice
              </a>
            </div>
          </article>
        </aside>
      </div>
    </div>
  );
}

export default PaymentConfirmationTemplate;
