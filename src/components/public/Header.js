import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import { DataStore } from "../../DataStore";

function Header() {

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const logout = () =>{

    window.open("http://localhost:5000/auth/logout", "_self");
  }

  const{searchState, setSearchState,user}= useContext(DataStore)

  console.log(user);

  return (
    <div>

    

    {
      user ? `${user.displayName} ${user.emails[0].value}` : ""
    }
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-4 col-sm-4">
                <a href="/" className="brand-wrap">
                  <img className="logo" src="../images/logo.png"/>
                </a>
              </div>
              <div className="col-lg-6 col-sm-8 col-8">
                <form action="#" className="search" onSubmit={(e) => {e.preventDefault() }}>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" onChange={(e) => setSearchState(e.target.value)}/>
                    <div class ="input-group-append">
                    <Link to={`/product/${searchState}`} className="d-flex">

                      <button class ="btn btn-primary" type ="submit"  >
                      <i class ="fa fa-search"></i>
                      </button>
                    </Link>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-3 col-12 col-sm-12">
                <div className="widgets-wrap d-flex justify-content-end">
                  <div className="widget-header">
                    <a href="#" className="icontext">
                      <div className="icon"><i className="fa fa-lg fa-shopping-cart"></i></div>
                      <div className="text">
                        <small className="text-muted">Basket</small> <br/>
                        <span>3 items</span>
                      </div>
                    </a>
                  </div>
                  <div className="widget-header dropdown">
                    <a href="#" className="ml-3 icontext" data-toggle="dropdown" data-offset="20,10">
                    
                      <div className="icon"><i className="fa fa-lg fa-user-circle"></i></div>
                      <div className="text">
                        <small className="text-muted">Sign In / Join</small> <br/>
                        <span>My account <i class ="fa fa-caret-down"></i></span>
                      </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <form className="px-4 py-3">
                        <div className="form-group">
                          <label>Email address</label>
                          <input type="email" className="form-control" placeholder="email@example.com"/>
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input type="password" className="form-control" placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                      </form>
                        <button onClick={google} type='submit' className='btn btn-success m-2' >Join with Google</button>
                      <hr className="dropdown-divider"/>
                      <Link to="/register" class ="dropdown-item" href="#">Have account? Sign up</Link>
                      <a class ="dropdown-item" href="#">Forgot password?</a>
                    </div>
                  </div>
                    <button className='btn btn-danger border rounded' onClick={logout}>Log out</button>
                </div>
              </div>
            </div>
          </div>
        </section>


        <nav className="navbar navbar-expand-lg navbar-main border-bottom">
          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav7" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main_nav7">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link pl-0" href="#"> <strong>All category</strong></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Fashion</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Supermarket</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Electronics</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Baby &amp Toys</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Fitness sport</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Foods and Drink</a>
                    <a className="dropdown-item" href="#">Home interior</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Category 1</a>
                    <a className="dropdown-item" href="#">Category 2</a>
                    <a className="dropdown-item" href="#">Category 3</a>
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