import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src="./images/logo.png" alt=""/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  MEN
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">T-shirts</a></li>
                  <li><a className="dropdown-item" href="/">Shirts</a></li>
                  <li><a className="dropdown-item" href="/">jeans</a></li>
                  <li><a className="dropdown-item" href="/">Shorts</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  
                  <li className="acc-drpdwn">
                    Accessories
                    <a href="/">Belt</a>
                    <a href="/">Wallet</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  WOMEN
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">T-shirts</a></li>
                  <li><a className="dropdown-item" href="/">Shirts</a></li>
                  <li><a className="dropdown-item" href="/">Jeans</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li className="acc-drpdwn">
                    Accessories
                    <a href="/">Belt</a>
                    <a href="/">Wallet</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  CUSTOMIZE
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Men</a></li>
                  <li><a className="dropdown-item" href="/">Women</a></li>
                  
                </ul>
              </li>
            </ul>
            <form className="d-flex search-box">
              <input className="form-control me-2" type="search" placeholder="Search Here..." aria-label="Search"/>
              <a href='/'><i class="fa fa-light fa-magnifying-glass"></i></a>
            </form>
            <div className="header-icons">
              <ul>
                <li><Link to="/cart"><i className="fa fa-light fa-bag-shopping"></i></Link></li>
                <li><a href="/"><i className="fa fa-light fa-heart fa-danger"></i></a></li>
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