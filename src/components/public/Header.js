import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useLocation } from "react-router-dom";
import { DataStore } from "../../DataStore";
import { logout } from "../helpers/logout";


function Header() {
  const query = new URLSearchParams(useLocation().search); // Getting query from URL
  const [cookies, setCookies] = useCookies(["cart"]);

  let totalProductInCart = 0;

  if (cookies.cart !== undefined) {
    cookies.cart.forEach((product) => {
      totalProductInCart += product.quantities;
    });
  }

  console.log(cookies);
  console.log(totalProductInCart);

  const choise = query.get("choise") === null ? "1" : query.get("choise");
  const min = query.get("min") === null ? 0 : query.get("min");
  const max = query.get("max") === null ? 0 : query.get("max");

  const [loginMessage, setLoginMessage] = useState("");

  const { searchState, setSearchState, user, setUser, categories } =
    useContext(DataStore);

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };



  const signInWithForm = async (e) => {
    e.preventDefault();

    const email = document.querySelector("#emailSignIn").value;
    const password = document.querySelector("#passwordSignIn").value;

    await fetch("http://localhost:5000/userlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email, password }),
    })
      .then((data) => data.json())
      .then((data) => {
        setLoginMessage(data.message);
        setUser(data.userInformation);
        localStorage.setItem("userToken", data.userToken);
      })
      .catch((err) => err);
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          {/* LOGO */}
          <div className="nav-brand">
            <a href="/" className="nav-link active pl-0">
              <img className="logo" src="../images/logo.svg" />
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse row" id="navbarNav" >
           
            {/* CATEGORY */}
            <div className="nav-link col-md-3">
              <div class="dropdown d-flex justify-content-center">
                <button
                  class="btn btn-lg  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  All Category
                </button>
                <div
                  class="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  {categories.map((category, index) => {
                    return (
                      <a
                        key={index}
                        href={`/category/${category.toUpperCase()}?whichPage=1&choise=${choise}&brands=&min=${min}&max=${max}&capacities=`}
                      >
                        <li>
                          <div className="dropdown-item" href="#">
                            {category.toUpperCase()}
                          </div>
                        </li>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* SEARCH */}
            <div className="nav-link col-md-4 d-flex justify-content-center">
              <form
                action="#"
                className="search"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    style={{maxWidth:"250px"}}
                    placeholder="Search"
                    onChange={(e) => setSearchState(e.target.value)}
                  />
                  <div class="input-group-append">
                    <Link to={`/search/${searchState}`} className="d-flex">
                      <button class="btn btn-dark" type="submit">
                        <i class="fa fa-search"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            {/* LOGIN AND CART */}
            <div className="nav-link col-md-5">
              <div className="widgets-wrap d-flex justify-content-center">
                <div className="widget-header">
                  <a href="/cartpage" className="icontext">
                    <div className="icon">
                      <i className="fa fa-lg fa-shopping-cart"></i>
                    </div>
                    <div className="text">
                      <small className="text-muted">Basket</small> <br />
                      <span>{totalProductInCart} items</span>
                    </div>
                  </a>
                </div>

                {user.email ? (
                  <div>
                   <Link to="/user"><img
                      className="border rounded mr-3 ml-3"
                      style={{ width: "40px" }}
                      src={user.photo}
                      alt=""
                    /></Link> 

                    <button
                      className="btn btn-yellow"
                      onClick={logout}
                    >
                      Log out
                    </button>
                  </div>
                ) : (
                  <div className="widget-header dropdown">
                    <a
                      href="#"
                      className="ml-3 icontext"
                      data-toggle="dropdown"
                      data-offset="20,10"
                    >
                      <img
                        className="border rounded mr-3 ml-3"
                        style={{ width: "40px", height: "40px" }}
                        src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
                        alt=""
                      />

                      <div className="text">
                        <small className="text-muted">Sign In / Join</small>
                        <br />
                        <span>
                          My account <i class="fa fa-caret-down"></i>
                        </span>
                      </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <form className="px-4 py-3">
                        <div className="form-group">
                          <label>Email address</label>
                          <input
                            id="emailSignIn"
                            type="email"
                            className="form-control"
                            placeholder="email@example.com"
                          />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            id="passwordSignIn"
                            type="password"
                            className="form-control"
                            placeholder="Password"
                          />
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            onClick={signInWithForm}
                            type="submit"
                            className="btn btn-primary"
                          >
                            Sign in
                          </button>
                        </div>
                        <div>{loginMessage}</div>
                      </form>
                      <div className="d-flex gap-2 justify-content-center">
                        <button
                          onClick={google}
                          type="button"
                          class="login-with-google-btn border rounded bg-dark text-white"
                        >
                          Sign in with Google
                        </button>
                      </div>
                      <hr className="dropdown-divider" />
                      <Link to="/register" class="dropdown-item" href="#">
                        Have account? Sign up
                      </Link>
                      <a class="dropdown-item" href="#">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
