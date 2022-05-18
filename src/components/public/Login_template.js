import React, { useState, useContext } from "react";
import { DataStore } from "../../DataStore";

function Login_template() {
  const { setUser } = useContext(DataStore);

  const [loginMessage, setLoginMessage] = useState("");

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const signInWithForm = async (e) => {
    e.preventDefault();

    const email = document.querySelector("#emailSign").value;
    const password = document.querySelector("#passwordSign").value;

    console.log(email,password);

    await fetch("http://localhost:5000/userlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email, password }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);

        setLoginMessage(data.message);
        setUser(data.userInformation);
        localStorage.setItem("userToken", data.userToken);
      })
      .catch((err) => err);
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row"></div>
      <div className="card col-md-4 m-auto">
        <div className="card-body">
          <h4 className="mb-4">Sign in</h4>
          <div>
            <div className="d-flex justify-content-center">
              <button
                onClick={google}
                type="button"
                class="login-with-google-btn border rounded bg-dark text-white"
              >
                Sign in with Google
              </button>
            </div>
            <p className="text-divider my-4"> Or login with username </p>
            
            <div className="mb-3">
              <input
                id="emailSign"
                type="text"
                className="form-control"
                placeholder="Username"
              />
            </div>
            <div className="mb-3 input-group">
              <input
                id="passwordSign"
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <button type="button"  className="btn btn-light">
                <i className="text-muted fa fa-eye"  onClick={()=>{const x = document.getElementById("passwordSign");  x.type==="password"?x.type="text":x.type="password"}}></i>
              </button>
            </div>
            

  
            <div className="my-5">
              <button
                onClick={signInWithForm}
                className="btn w-100 btn-primary"
                type="button"
              >
                Sign in
              </button>
            </div>
            <p className="mb-1 text-center">
              Don’t have an account? <a href="/register">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login_template;
