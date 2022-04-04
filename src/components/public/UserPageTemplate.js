import React from "react";

function UserPageTemplate() {
  return (
    <div className="bg">
    <div className="container pb-5 pt-5">
      <div className="card">
      <div className="card-body">
        <div className="itemside p-2">
          <div className="aside">
            <img
              src="bootstrap5-ecommerce/images/avatars/avatar.jpg"
              className="icon-md img-avatar"
            />
          </div>
          <div className="info">
            <h6 className="title">Mr. Jackson Mike</h6>
            <p>
              Email: myusername@gmail.com <i className="dot"></i>
              <br />
              Phone: +1234567890988
              <a href="#" className="px-2">
                <i className="fa fa-pen"></i>
              </a>
            </p>
          </div>
        </div>
        <hr /> <p className="text-muted">Delivery addresses</p>
        <div className="row g-2 mb-3">
          <div className="col-md-6">
            <article className="box">
              <b className="mx-2 text-muted">
                <i className="fa fa-map-marker-alt"></i>
              </b>
              Tashkent city, Street name, Building 123, House 321
            </article>
          </div>
          <div className="col-md-6">
            <article className="box">
              <b className="mx-2 text-muted">
                <i className="fa fa-map-marker-alt"></i>
              </b>
              Moscow city, Street name, Building lenin, House 77
            </article>
          </div>
        </div>
        <a href="#" className="btn btn-outline-primary">
          <i className="me-2 fa fa-plus"></i> Add new address
        </a>
        <hr /> <p className="text-muted">Payment methods</p>
        <div className="row g-2 mb-3">
          <div className="col-md-6">
            <article className="box">
              <b className="mx-2 text-muted">
                <i className="fa fa-credit-card"></i>
              </b>
              Visa •••• 9905, Exp: 12/21
            </article>
          </div>
        </div>
        <a href="#" className="btn btn-outline-primary">
          <i className="me-2 fa fa-plus"></i> Add payment method
        </a>
      </div>
      <div className="card-body">
        <header className="d-md-flex">
          <div className="flex-grow-1">
            <h6 className="mb-0">
              Order ID: 1032 <i className="dot"></i>
              <span className="text-danger"> Pending </span>
            </h6>
            <span>Date: 16 December 2020</span>
          </div>
          <div>
            <a href="#" className="btn btn-sm btn-outline-danger">
              Cancel order
            </a>
            <a href="#" className="btn btn-sm btn-primary">
              Track order
            </a>
          </div>
        </header>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <p className="mb-0 text-muted">Contact</p>
            <p className="m-0">
              Alex Donald <br /> Phone: 109-295-9131 <br /> Email:
              info@mywebsite.com
            </p>
          </div>
          <div className="col-md-4 border-start">
            <p className="mb-0 text-muted">Shipping address</p>
            <p className="m-0">
              United States <br /> 600 Markley Street, Suite 170777 Port
              Reading, NJ 07064
            </p>
          </div>
          <div className="col-md-4 border-start">
            <p className="mb-0 text-muted">Payment</p>
            <p className="m-0">
              <span className="text-success"> Visa **** 0932 </span> <br /> Shipping
              fee: $12 <br /> Total paid: $150.90
            </p>
          </div>
        </div>
        <hr />
        <ul className="row">
          <li className="col-lg-4 col-md-6">
            <div className="itemside mb-3">
              <div className="aside">
                <img
                  width="72"
                  height="72"
                  src="bootstrap5-ecommerce/images/items/6.jpg"
                  className="img-sm rounded border"
                />
              </div>
              <div className="info">
                <p className="title">Apple SmartWatch Series 4 Space Gray</p>
                <strong> 2x = $137.00 </strong>
              </div>
            </div>
          </li>
          <li className="col-lg-4 col-md-6">
            <div className="itemside mb-3">
              <div className="aside">
                <img
                  width="72"
                  height="72"
                  src="bootstrap5-ecommerce/images/items/7.jpg"
                  className="img-sm rounded border"
                />
              </div>
              <div className="info">
                <p className="title">Gaming Headset with mic</p>
                <strong> 2x = $339.90 </strong>
              </div>
            </div>
          </li>
          <li className="col-lg-4 col-md-6">
            <div className="itemside mb-3">
              <div className="aside">
                <img
                  width="72"
                  height="72"
                  src="bootstrap5-ecommerce/images/items/8.jpg"
                  className="img-sm rounded border"
                />
              </div>
              <div className="info">
                <p className="title">Backpack for hiking</p>
                <strong> 2x = $339.90 </strong>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="card-body">
        
        <header className="d-md-flex">
          
          <div className="flex-grow-1">
            
            <h6 className="mb-0">
              
              Order ID: 9088 <i className="dot"></i>
              <span className="text-success"> Shipped </span>
            </h6>
            <span>Date: 12 January 2021</span>
          </div>
          <div>
            
            <a href="#" className="btn btn-sm btn-outline-danger">
              Cancel order
            </a>
            <a href="#" className="btn btn-sm btn-primary">
              Track order
            </a>
          </div>
        </header>
        <hr />
        <div className="row">
          
          <div className="col-md-4">
            
            <p className="mb-0 text-muted">Contact</p>
            <p className="m-0">
              
              Mike Johnatan <br /> Phone: 371-295-9131 <br /> Email:
              info@mywebsite.com
            </p>
          </div>
          <div className="col-md-4 border-start">
            
            <p className="mb-0 text-muted">Shipping address</p>
            <p className="m-0">
              
              United States <br /> 3601 Old Capitol Trail Unit A-7, Suite 170777
              Wilmington, DE 19808
            </p>
          </div>
          <div className="col-md-4 border-start">
            
            <p className="mb-0 text-muted">Payment</p>
            <p className="m-0">
              
              <span className="text-success"> Visa **** 4216 </span> <br /> Shipping
              fee: $56 <br /> Total paid: $456
            </p>
          </div>
        </div>
        <hr />
        <ul className="row">
          
          <li className="col-lg-4 col-md-6">
            
            <div className="itemside mb-3">
              
              <div className="aside">
                
                <img
                  src="bootstrap5-ecommerce/images/items/9.jpg"
                  className="img-sm rounded border"
                  width="72"
                  height="72"
                />
              </div>
              <div className="info">
                
                <p className="title">Jeans shorts for men - XL</p>
                <strong> 2x = $339.90 </strong>
              </div>
            </div>
          </li>
          <li className="col-lg-4 col-md-6">
            
            <div className="itemside mb-3">
              
              <div className="aside">
                
                <img
                  src="bootstrap5-ecommerce/images/items/12.jpg"
                  className="img-sm rounded border"
                  width="72"
                  height="72"
                />
              </div>
              <div className="info">
                
                <p className="title"> T-shirts blue colors - SM </p>
                <strong> 2x = $53.00 </strong>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </div>
    </div>
  );
}

export default UserPageTemplate;
