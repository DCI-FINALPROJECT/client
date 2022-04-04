import React from "react";

function Login_template() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row"></div>
    <div className="card col-md-4 m-auto">
      <div className="card-body">
        <h4 className="mb-4">Sign in</h4>
        <form>
          <div className="d-flex gap-2">
            <a href="#" className="d-flex align-items-center btn btn-light w-100">
              <img className="me-2" src="" height="20" width="20" />
              Facebook
            </a>
            <a href="/auth/google" className="d-flex align-items-center btn btn-light w-100">
              <img className="me-2" src="" height="20" width="20" />
              Google{" "}
            </a>
          </div>
          <p className="text-divider my-4"> Or login with username </p>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Username" />
          </div>
          <div className="mb-3 input-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <button type="button" className="btn btn-light">
              {" "}
              <i className="text-muted fa fa-eye"></i>{" "}
            </button>
          </div>
          <div className="mb-3">
            <label className="form-check">
              {" "}

              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <button type="button" className="btn btn-light">
                {" "}
                <i className="text-muted fa fa-eye"></i>{" "}
              </button>
              </label>
            </div>
            <div className="mb-3">
              <label className="form-check">
                {" "}
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  checked=""
                />
                <span className="form-check-label"> Remember </span>
              </label>
            </div>
            <div className="mb-4">
              <button className="btn w-100 btn-primary" type="button">
                {" "}
                Sign in{" "}
              </button>
            </div>
            <p className="mb-1 text-center">
              Don’t have an account? <a href="#">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
      </div>
  );
}

export default Login_template;
