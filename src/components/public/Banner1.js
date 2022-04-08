import React from "react";

function Banner1() {
  return (
    <div>
      <section class="bg-white border-bottom banner1">
        <div class="container">
          <div class="row align-items-center" style={{minHeight:"520px"}}>
            <div class="col-lg-6 order-lg-2">
              <article class="my-5 ms-lg-5">
                <h1 class="display-4">
                  New products &amp; <br /> brands in our shop
                </h1>
                <p class="lead">
                  Trendy Products, Factory Prices, Excellent Service
                </p>
                <a href="#" class="btn btn-primary btn-lg">
                  Discover
                </a>
                <a href="#" class="btn btn-light btn-lg">
                  Learn more
                </a>
              </article>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner1;
