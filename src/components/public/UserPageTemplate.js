import React from "react";

function UserPageTemplate() {
  return (
    <div>
      <div class="card-body">
        
        <div class="itemside align-items-center">
          
          <div class="aside">
            
            <img
              src="bootstrap5-ecommerce/images/avatars/avatar.jpg"
              class="icon-md img-avatar"
            />
          </div>
          <div class="info">
            
            <h6 class="title">Mr. Jackson Mike</h6>
            <p>
              Email: myusername@gmail.com <i class="dot"></i> Phone:
              +1234567890988
              <a href="#" class="px-2">
                <i class="fa fa-pen"></i>
              </a>
            </p>
          </div>
        </div>
        <hr /> <p class="text-muted">Delivery addresses</p>
        <div class="row g-2 mb-3">
          
          <div class="col-md-6">
            
            <article class="box">
              
              <b class="mx-2 text-muted">
                <i class="fa fa-map-marker-alt"></i>
              </b>
              Tashkent city, Street name, Building 123, House 321
            </article>
          </div>
          <div class="col-md-6">
            
            <article class="box">
              
              <b class="mx-2 text-muted">
                <i class="fa fa-map-marker-alt"></i>
              </b>
              Moscow city, Street name, Building lenin, House 77
            </article>
          </div>
        </div>
        <a href="#" class="btn btn-outline-primary">
          
          <i class="me-2 fa fa-plus"></i> Add new address
        </a>
        <hr /> <p class="text-muted">Payment methods</p>
        <div class="row g-2 mb-3">
          
          <div class="col-md-6">
            
            <article class="box">
              
              <b class="mx-2 text-muted">
                <i class="fa fa-credit-card"></i>
              </b>
              Visa •••• 9905, Exp: 12/21
            </article>
          </div>
        </div>
        <a href="#" class="btn btn-outline-primary">
          
          <i class="me-2 fa fa-plus"></i> Add payment method
        </a>
      </div>
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
              
              <span class="text-success"> Visa **** 0932 </span> <br /> Shipping
              fee: $12 <br /> Total paid: $150.90
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
    </div>
  );
}

export default UserPageTemplate;
