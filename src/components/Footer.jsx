import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer className="container-fluid footer">
    <div className="upper-foot row">
      <div className="col-md-4">
        <img src="images/logo.png" alt=""/>
      </div>
      <div className="col-md-2">
        <h6>Customer Services</h6>
        <ul>
          <li><Link to="">My Account</Link></li>
          <li><Link to="">Order History</Link></li>
          <li><Link to="">Wishlist</Link></li>
          <li><Link to="">News Letter</Link></li>
          <li><Link to="">Return offer</Link></li>
          <li><Link to="">Track Order</Link></li>
          <li><Link to="">Contact Us</Link></li>
        </ul>
      </div>
      <div className="col-md-2">
        <h6>Company</h6>
        <ul>
          <li><Link to="">About Us</Link></li>
          <li><Link to="">We're Hiring</Link></li>
          <li><Link to="">Term & Condition</Link></li>
          <li><Link to="">Privacy Policy</Link></li>
          <li><Link to="">Return Policy</Link></li>
          <li><Link to="">Payment Policy</Link></li>
          <li><Link to="">FAQ's</Link></li>
        </ul>
      </div>
      <div className="col-md-4 social">
        <h6>Connect With Us</h6>
        <ul>
          <li><Link to=""><i className="fa-brands fa-facebook fa-2x"></i></Link></li>
          <li><Link to=""><i className="fa-brands fa-twitter-square fa-2x"></i></Link></li>
          <li><Link to=""><i className="fa-brands fa-instagram-square fa-2x"></i></Link></li>
          <li><Link to=""><i className="fa-brands fa-youtube-square fa-2x"></i></Link></li>
        </ul>
      </div>
    </div>
    <div className="bottom-foot row">
      <div className="col-md-8">© 2022 Amic. All rights reserved.</div>
      <div className="col-md-2">info@amic.com</div>
      <div className="col-md-2">(323) 986-6166</div>
    </div>
  </footer>
    </>
  )
}

export default Footer