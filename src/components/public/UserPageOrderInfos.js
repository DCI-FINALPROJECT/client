import React from 'react'

function UserPageOrderInfos() {
  return (
    <div class="col-lg-9">
    <article class="card mb-3">
      <div class="card-body">
        <header class="d-md-flex">
          <div class="flex-grow-1">
            <h6 class="mb-0">
              Order ID: 1032 <i class="dot"></i>
              <span class="text-danger"> Pending </span>
            </h6>
            <span>Date: 16 December 2020</span>
          </div>
          <div>
            <a href="#" class="btn btn-sm btn-outline-danger">
              Cancel order
            </a>
            <a href="#" class="btn btn-sm btn-primary">
              Track order
            </a>
          </div>
        </header>
        <hr />
        <div class="row">
          <div class="col-md-4">
            <p class="mb-0 text-muted">Contact</p>
            <p class="m-0">
              Alex Donald <br /> Phone: 109-295-9131 <br /> Email:
              info@mywebsite.com
            </p>
          </div>
          <div class="col-md-4 border-start">
            <p class="mb-0 text-muted">Shipping address</p>
            <p class="m-0">
              United States <br /> 600 Markley Street, Suite 170777 Port
              Reading, NJ 07064
            </p>
          </div>
          <div class="col-md-4 border-start">
            <p class="mb-0 text-muted">Payment</p>
            <p class="m-0">
              <span class="text-success"> Visa **** 0932 </span> <br />
              Shipping fee: $12 <br /> Total paid: $150.90
            </p>
          </div>
        </div>
        <hr />
        <ul class="row">
          <li class="col-lg-4 col-md-6">
            <div class="itemside mb-3">
              <div class="aside">
                <img
                  width="72"
                  height="72"
                  src="bootstrap5-ecommerce/images/items/6.jpg"
                  class="img-sm rounded border"
                />
              </div>
              <div class="info">
                <p class="title">Apple SmartWatch Series 4 Space Gray</p>
                <strong> 2x = $137.00 </strong>
              </div>
            </div>
          </li>
          <li class="col-lg-4 col-md-6">
            <div class="itemside mb-3">
              <div class="aside">
                <img
                  width="72"
                  height="72"
                  src="bootstrap5-ecommerce/images/items/7.jpg"
                  class="img-sm rounded border"
                />
              </div>
              <div class="info">
                <p class="title">Gaming Headset with mic</p>
                <strong> 2x = $339.90 </strong>
              </div>
            </div>
          </li>
          <li class="col-lg-4 col-md-6">
            <div class="itemside mb-3">
              <div class="aside">
                <img
                  width="72"
                  height="72"
                  src="bootstrap5-ecommerce/images/items/8.jpg"
                  class="img-sm rounded border"
                />
              </div>
              <div class="info">
                <p class="title">Backpack for hiking</p>
                <strong> 2x = $339.90 </strong>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </article>
    <article class="card">
      <div class="card-body">
        <header class="d-md-flex">
          <div class="flex-grow-1">
            <h6 class="mb-0">
              Order ID: 9088 <i class="dot"></i>
              <span class="text-success"> Shipped </span>
            </h6>
            <span>Date: 12 January 2021</span>
          </div>
          <div>
            <a href="#" class="btn btn-sm btn-outline-danger">
              Cancel order
            </a>
            <a href="#" class="btn btn-sm btn-primary">
              Track order
            </a>
          </div>
        </header>
        <hr />
        <div class="row">
          <div class="col-md-4">
            <p class="mb-0 text-muted">Contact</p>
            <p class="m-0">
              Mike Johnatan <br /> Phone: 371-295-9131 <br /> Email:
              info@mywebsite.com
            </p>
          </div>
          <div class="col-md-4 border-start">
            <p class="mb-0 text-muted">Shipping address</p>
            <p class="m-0">
              United States <br /> 3601 Old Capitol Trail Unit A-7, Suite
              170777 Wilmington, DE 19808
            </p>
          </div>
          <div class="col-md-4 border-start">
            <p class="mb-0 text-muted">Payment</p>
            <p class="m-0">
              <span class="text-success"> Visa **** 4216 </span> <br />
              Shipping fee: $56 <br /> Total paid: $456
            </p>
          </div>
        </div>
        <hr />
        <ul class="row">
          <li class="col-lg-4 col-md-6">
            <div class="itemside mb-3">
              <div class="aside">
                <img
                  width="72"
                  height="72"
                  src="bootstrap5-ecommerce/images/items/9.jpg"
                  class="img-sm rounded border"
                />
              </div>
              <div class="info">
                <p class="title">Jeans shorts for men - XL</p>
                <strong> 2x = $339.90 </strong>
              </div>
            </div>
          </li>
          <li class="col-lg-4 col-md-6">
            <div class="itemside mb-3">
              <div class="aside">
                <img
                  width="72"
                  height="72"
                  src="bootstrap5-ecommerce/images/items/12.jpg"
                  class="img-sm rounded border"
                />
              </div>
              <div class="info">
                <p class="title"> T-shirts blue colors - SM </p>
                <strong> 2x = $53.00 </strong>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </article>
  </div>
  )
}

export default UserPageOrderInfos