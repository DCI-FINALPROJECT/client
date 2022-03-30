import React from "react";

function Register_template() {
  return (
    <div class="card mb-4">
      
      <article class="card-body">
        
        <h4 class="mb-4">Create accaunt</h4>
        <form>
          
          <div class="row gx-3">
            
            <div class="col mb-4">
              
              <label class="form-label">First name</label>
              <input type="text" class="form-control" placeholder="" />
            </div>
            <div class="col mb-4">
              
              <label class="form-label">Last name</label>
              <input type="text" class="form-control" placeholder="" />
            </div>
          </div>
          <div class="row">
            
            <div class="col-auto mb-3">
              
              <label class="form-check">
                
                <input
                  class="form-check-input"
                  type="radio"
                  name="choose_a"
                  checked=""
                />
                <span class="form-check-label"> Buyer </span>
              </label>
            </div>
            <div class="col-auto mb-3">
              
              <label class="form-check">
                
                <input
                  class="form-check-input"
                  type="radio"
                  name="choose_a"
                />
                <span class="form-check-label"> Seller </span>
              </label>
            </div>
            <div class="col-auto mb-3">
              
              <label class="form-check">
                
                <input
                  class="form-check-input"
                  type="radio"
                  name="choose_a"
                />
                <span class="form-check-label"> Both </span>
              </label>
            </div>
          </div>
          <div class="row gx-3">
            
            <div class="col mb-3">
              
              <label class="form-label">City</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col mb-3">
              
              <label class="form-label">Country</label>
              <select class="form-select">
                
                <option value="none">Choose...</option>
                <option value="uz">Uzbekistan</option>
                <option value="ru">Russia</option>
                <option selected="">United States</option>
                <option value="in">India</option>
                <option value="af">Afganistan</option>
              </select>
            </div>
            <div class="col-12 mb-3">
              
              <label class="form-label">Address</label>
              <input type="text" class="form-control" placeholder="" />
            </div>
            <div class="col-6 mb-3">
              
              <label class="form-label">Email</label>
              <input type="email" class="form-control" placeholder="" />
              <small class="form-text">We'll never share your email</small>
            </div>
            <div class="col-6 mb-3">
              
              <label class="form-label">Phone</label>
              <div class="input-group">
                
                <select class="form-select" style={{ maxWidth: "120px" }}>
                  
                  <option value="us">US +1 </option>
                  <option value="uz">UZ +998</option>
                  <option value="ru">RU +72 </option>
                </select>
                <input type="email" class="form-control" placeholder="" />
              </div>
            </div>
            <div class="col mb-3">
              
              <label class="form-label">Create password</label>
              <input class="form-control" type="password" />
            </div>
            <div class="col mb-3">
              
              <label class="form-label">Repeat password</label>
              <input class="form-control" type="password" />
            </div>
          </div>
          <div class="row mt-3 mb-4 align-items-center">
            
            <div class="col-auto">
              
              <button class="btn btn-primary" type="button">
                Register now
              </button>
            </div>
            <div class="col">
              
              <label class="form-check me-auto">
                
                <input class="form-check-input" type="checkbox" value="" />
                <span class="form-check-label">
                  
                  I agree with Terms and Conditions
                </span>
              </label>
            </div>
          </div>
        </form>
        <hr />
        <p class="mb-0">
          Already have an account? <a href="#">Sign in</a>
        </p>
      </article>
    </div>
  );
}

export default Register_template;
