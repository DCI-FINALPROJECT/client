import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataStore } from "../../DataStore";

function Header() {
  const [loginMessage, setLoginMessage] = useState("");

  const {
    searchState,
    setSearchState,
    user,
    setUser,
    categories,
    setCategories,
  } = useContext(DataStore);

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
    localStorage.removeItem("userToken"); // With this statement if user logout click, userToken will be deleted in localStorage.
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
        console.log("DATATATA", data);
        setLoginMessage(data.message);
        setUser(data.userInformation);
        localStorage.setItem("userToken", data.userToken);
      })
      .catch((err) => err);
  };


  return (
    <div>
      {user ? `${user.firstName} ${user.email}` : ""}
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center ">
              {/* LOGO */}
              <div className="col-md-3">
                <a href="/" className="">
                  <img className="logo" src="../images/logo.svg" />
                </a>
              </div>
              {/* CATEGORY */}
              <div className="col-md-2">
                <div class="dropdown">
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
                        <a key={index} href={`/category/${category}`}>
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
              <div className="col-md-3">
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
                      placeholder="Search"
                      onChange={(e) => setSearchState(e.target.value)}
                    />
                    <div class="input-group-append">
                      <Link to={`/search/${searchState}`} className="d-flex">
                        <button class="btn btn-primary" type="submit">
                          <i class="fa fa-search"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
              {/* LOGIN AND CART */}
              <div className="col-md-4">
                <div className="widgets-wrap d-flex justify-content-end">
                  <div className="widget-header">
                    <a href="#" className="icontext">
                      <div className="icon">
                        <i className="fa fa-lg fa-shopping-cart"></i>
                      </div>
                      <div className="text">
                        <small className="text-muted">Basket</small> <br />
                        <span>3 items</span>
                      </div>
                    </a>
                  </div>
                  <div className="widget-header dropdown">
                    <a
                      href="#"
                      className="ml-3 icontext"
                      data-toggle="dropdown"
                      data-offset="20,10"
                    >
                      <div className="icon">
                        <i className="fa fa-lg fa-user-circle"></i>
                      </div>
                      <div className="text">
                        <small className="text-muted">Sign In / Join</small>{" "}
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
                        <button
                          onClick={signInWithForm}
                          type="submit"
                          className="btn btn-primary"
                        >
                          Sign in
                        </button>
                        <div>{loginMessage}</div>
                      </form>
                      <button
                        onClick={google}
                        type="submit"
                        className="btn btn-success m-2"
                      >
                        Join with Google
                      </button>
                      <hr className="dropdown-divider" />
                      <Link to="/register" class="dropdown-item" href="#">
                        Have account? Sign up
                      </Link>
                      <a class="dropdown-item" href="#">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <button
                    className="btn btn-danger border rounded"
                    onClick={logout}
                  >
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Header;
