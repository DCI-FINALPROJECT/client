import React from 'react'

function Header() {
  return (
    <div>
      <header class="section-header">
        <section class="header-main border-bottom">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-3 col-4 col-sm-4">
                <a href="http://bootstrap-ecommerce.com" class="brand-wrap">
                  <img class="logo" src="../images/logo.png"/>
                </a>
              </div>
              <div class="col-lg-6 col-sm-8 col-8">
                <form action="#" class="search">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search"/>
                    <div class ="input-group-append">
                    <button class ="btn btn-primary" type ="submit">
                    <i class ="fa fa-search"></i>
                    </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-lg-3 col-12 col-sm-12">
                <div class="widgets-wrap d-flex justify-content-end">
                  <div class="widget-header">
                    <a href="#" class="icontext">
                      <div class="icon"><i class="fa fa-lg fa-shopping-cart"></i></div>
                      <div class="text">
                        <small class="text-muted">Basket</small> <br/>
                        <span>3 items</span>
                      </div>
                    </a>
                  </div>
                  <div class="widget-header dropdown">
                    <a href="#" class="ml-3 icontext" data-toggle="dropdown" data-offset="20,10">
                      <div class="icon"><i class="fa fa-lg fa-user-circle"></i></div>
                      <div class="text">
                        <small class="text-muted">Sign In / Join</small> <br/>
                        <span>My account <i class ="fa fa-caret-down"></i></span>
                      </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <form class="px-4 py-3">
                        <div class="form-group">
                          <label>Email address</label>
                          <input type="email" class="form-control" placeholder="email@example.com"/>
                        </div>
                        <div class="form-group">
                          <label>Password</label>
                          <input type="password" class="form-control" placeholder="Password"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Sign in</button>
                      </form>
                      <hr class="dropdown-divider"/>
                      <a class ="dropdown-item" href="#">Have account?Sign up</a>
                      <a class ="dropdown-item" href="#">Forgot password?</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <nav class="navbar navbar-expand-lg navbar-main border-bottom">
          <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav7" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="main_nav7">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link pl-0" href="#"> <strong>All category</strong></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Fashion</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Supermarket</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Electronics</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Baby &amp Toys</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Fitness sport</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Foods and Drink</a>
                    <a class="dropdown-item" href="#">Home interior</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Category 1</a>
                    <a class="dropdown-item" href="#">Category 2</a>
                    <a class="dropdown-item" href="#">Category 3</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

    </div>
  )
}

export default Header;