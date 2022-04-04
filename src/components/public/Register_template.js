import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register_template() {
  const [errMessage, setErrMessage] = useState(""); // With this state, we can show to user which error has the app.

  const registerANewUser = async (e) => {
    e.preventDefault();

    try {
      const firstName = document.querySelector("#firstName").value;
      const lastName = document.querySelector("#lastName").value;
      const address = document.querySelector("#address").value;
      const email = document.querySelector("#email").value;
      const phone = document.querySelector("#phone").value;
      const password1Input = document.querySelector("#password1").value;
      const password2Input = document.querySelector("#password2").value;

      if (password1Input === password2Input) {
        const newUser = {
          firstName,
          lastName,
          address,
          email,
          phone,
          password: password1Input,
        };

        const response = await fetch("http://localhost:5000/newUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });

        const result = response;

        console.log(result);

        if (result.status === 200) {
          setErrMessage("");
        } else {
          response
            .json()
            .then((data) => data.errors)
            .then((data) => data[0].msg)
            .then((data) => setErrMessage("*" + data));
        }
      } else {
        setErrMessage("*Passwords do not match");
        throw new Error("*Passwords do not match");
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  return (
    <div className="container pt-5 pb-5">
      <div className="card mb-4 col-md-8 m-auto">
        <article className="card-body">
          <h4 className="mb-4">Create account</h4>
          <form onSubmit={registerANewUser}>
            <div className="row gx-3">
              <div className="col mb-4">
                <label className="form-label">*First name</label>
                <input
                  id="firstName"
                  type="text"
                  className="form-control"
                  placeholder=""
                  required
                />
              </div>
              <div className="col mb-4">
                <label className="form-label">*Last name</label>
                <input
                  id="lastName"
                  type="text"
                  className="form-control"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="row gx-3">
              <div className="col-12 mb-3">
                <label className="form-label">Address</label>
                <input
                  id="address"
                  type="text"
                  className="form-control"
                  placeholder=""
                />
              </div>
              <div className="col-6 mb-3">
                <label className="form-label">*Email</label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder=""
                  required
                />
                <small className="form-text">
                  We'll never share your email
                </small>
              </div>
              <div className="col-6 mb-3">
                <label className="form-label">Phone</label>
                <div className="input-group">
                  <input
                    id="phone"
                    type="phone"
                    className="form-control"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col mb-3">
                <label className="form-label">*Create password</label>
                <input
                  id="password1"
                  className="form-control"
                  type="password"
                  required
                />
              </div>
              <div className="col mb-3">
                <label className="form-label">*Repeat password</label>
                <input
                  id="password2"
                  className="form-control"
                  type="password"
                  required
                />
              </div>
            </div>
            <div className="row mt-3 mb-4 align-items-center">
              <div className="col-auto">
                <button type="submit" className="btn btn-primary">
                  Register now
                </button>
              </div>
              <div className="col">
                <label className="form-check me-auto">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <span className="form-check-label">
                    I agree with Terms and Conditions
                  </span>
                </label>
              </div>
            </div>
            <div className="text-danger">{errMessage}</div>
          </form>
          <hr />
          <p className="mb-0">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </article>
      </div>
    </div>
  );
}

export default Register_template;
