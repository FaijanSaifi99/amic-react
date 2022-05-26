import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light p-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src="./images/logo.png" alt=""/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  MEN
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/">T-shirts</Link></li>
                  <li><Link className="dropdown-item" to="/">Shirts</Link></li>
                  <li><Link className="dropdown-item" to="/">jeans</Link></li>
                  <li><Link className="dropdown-item" to="/">Shorts</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  
                  <li className="acc-drpdwn">
                    Accessories
                    <Link to="/">Belt</Link>
                    <Link to="/">Wallet</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  WOMEN
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/">T-shirts</Link></li>
                  <li><Link className="dropdown-item" to="/">Shirts</Link></li>
                  <li><Link className="dropdown-item" to="/">Jeans</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li className="acc-drpdwn">
                    Accessories
                    <Link to="/">Belt</Link>
                    <Link to="/">Wallet</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  CUSTOMIZE
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/">Men</Link></li>
                  <li><Link className="dropdown-item" to="/">Women</Link></li>
                  
                </ul>
              </li>
            </ul>
            <form className="d-flex search-box">
              <input className="form-control me-2" type="search" placeholder="Search Here..." aria-label="Search"/>
              <Link to='/'><i className="fa fa-light fa-magnifying-glass"></i></Link>
            </form>
            <div className="header-icons">
              <ul>
                <li><Link to="/cart"><i className="fa fa-light fa-bag-shopping"></i></Link></li>
                <li><Link to="/"><i className="fa fa-light fa-heart fa-danger"></i></Link></li>
                <li><Link to='/register'><i className="fa fa-thin fa-user"></i></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}


export default Header;