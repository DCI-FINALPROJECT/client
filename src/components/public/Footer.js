import React from "react";

function Footer() {
  return (
    <div style={{color:"grey"}}>
      <footer className="section-footer border-top">
        <div className="container">
          <section className="footer-top py-3">
            <div className="row ">
              <div className="col-md-3">
                <aside className="">
                  <article className="mr-3">
                    <a href="/">
                    <img
                      src="../images/logo.svg"
                      className="logo-footer mt-5"
                    />
                    </a>
                    

                    <div className="ml-3 mt-2">
                      <a
                        className="btn btn-icon btn-light mr-1"
                        title="Facebook"
                        target="_blank"
                        href="https:/facebook.com"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        className="btn btn-icon btn-light mr-1"
                        title="Instagram"
                        target="_blank"
                        href="https:/instagram.com"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        className="btn btn-icon btn-light mr-1"
                        title="Youtube"
                        target="_blank"
                        href="https:/youtube.com"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                      <a
                        className="btn btn-icon btn-light"
                        title="Twitter"
                        target="_blank"
                        href="https:/twitter.com"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </article>
                </aside>
              </div>
              <div className="col-md-9 row justify-content-around  align-items-center flex-wrap mt-3">
                <aside className="col-sm-3">
                  <h6 className="title">Contact</h6>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-decoration-none "
                        title="Facebook"
                        target="_blank"
                        href="https:/facebook.com"
                      >
                        <i className="fab fa-facebook-f mr-1"></i>Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-decoration-none"
                        title="Instagram"
                        target="_blank"
                        href="https:/instagram.com"
                      >
                        <i className="fab fa-instagram mr-1"></i>Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-decoration-none"
                        title="Youtube"
                        target="_blank"
                        href="https:/youtube.com"
                      >
                        <i className="fab fa-youtube mr-1"></i>Youtube
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-decoration-none"
                        title="Twitter"
                        target="_blank"
                        href="https:/twitter.com"
                      >
                        <i className="fab fa-twitter mr-1"></i>Twitter
                      </a>
                    </li>
                  </ul>
                </aside>
                <aside className="col-sm-3 " style={{color:"grey"}}>
                  <h6 className="title">Our Team</h6>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="https://github.com/ahmetyanik"
                        className=" text-decoration-none"
                      >
                        <i className="fab fa-github"></i> Ahmet
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/carolmvargas"
                        className=" text-decoration-none"
                      >
                        <i className="fab fa-github"></i> Caroline
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/Felix-Hasse"
                        className=" text-decoration-none"
                      >
                        <i className="fab fa-github"></i> Felix
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/s-polat"
                        className="text-decoration-none"
                      >
                        <i className="fab fa-github"></i> Sıddık
                      </a>
                    </li>
                  </ul>
                </aside>
                <aside className="col-sm-3  ">
                  <h6 className="title">For users</h6>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/login"> User Login </a>
                    </li>
                    <li>
                      <a href="/register"> User register </a>
                    </li>
                    <li>
                      <a href="/user"> Account Setting </a>
                    </li>
                    <li>
                      <a href="/cartpage"> My Orders </a>
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
            <p className="text-muted">&copy 2020 Company All rights resetved</p>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
