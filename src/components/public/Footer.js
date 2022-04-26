import React from "react";

function Footer() {
  return (
    <div>
      <footer className="section-footer border-top">
        <div className="container">
          <section className="footer-top py-3">
            <div className="row ">
              <div className="col-md-3">
                <aside className="">
                  <article className="mr-3">
                    <img src="../images/logo.svg" className="logo-footer" />
                    <p className="mt-3">
                      Some short text about company like You might remember the
                      Dell computer commercials in which a youth reports this
                      exciting news to his friends.
                    </p>
                    <div>
                      <a
                        className="btn btn-icon btn-light"
                        title="Facebook"
                        target="_blank"
                        href="#"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        className="btn btn-icon btn-light"
                        title="Instagram"
                        target="_blank"
                        href="#"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        className="btn btn-icon btn-light"
                        title="Youtube"
                        target="_blank"
                        href="#"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                      <a
                        className="btn btn-icon btn-light"
                        title="Twitter"
                        target="_blank"
                        href="#"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </article>
                </aside>
              </div>
              <div className="col-md-9 row justify-content-around  align-items-center flex-wrap mt-3">
                <aside className="col-sm-3">
                  <h6 className="title">About</h6>
                  <ul className="list-unstyled">
                    <li>
                      {" "}
                      <a href="#">About us</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Services</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Rules and terms</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Blogs</a>
                    </li>
                  </ul>
                </aside>
                <aside className="col-sm-3 ">
                  <h6 className="title">Services</h6>
                  <ul className="list-unstyled">
                    <li>
                      {" "}
                      <a href="#">Help center</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Money refund</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Terms and Policy</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Open dispute</a>
                    </li>
                  </ul>
                </aside>
                <aside className="col-sm-3 mt-4 ">
                  <h6 className="title">For users</h6>
                  <ul className="list-unstyled">
                    <li>
                      {" "}
                      <a href="#"> User Login </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#"> User register </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#"> Account Setting </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#"> My Orders </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#"> My Wishlist </a>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </section>

          <section className="footer-copyright border-top">
            <p target="_blank" className="float-right text-muted">
              <a href="#">Privacy & Cookies</a> &nbsp &nbsp
              <a href="#">Accessibility</a>
            </p>
            <p className="text-muted">
              {" "}
              &copy 2020 Company All rights resetved{" "}
            </p>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
