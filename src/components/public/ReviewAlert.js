import React from "react";

function ReviewAlert() {
  return (
    <div>
      <div class="card bg-warning">
        <div class="card-body">
          <h5 class="card-title text-center">If you want to write a comment, you must login or register!</h5>
        
          <div className="d-flex justify-content-center">

          <a href="/register" class="btn btn-primary">
            Register
          </a>
          <a href="/login" class="btn btn-success ml-3">
            Login
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewAlert;
