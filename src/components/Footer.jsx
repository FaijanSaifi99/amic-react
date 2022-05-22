import React from 'react'

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
          <li><a href="">My Account</a></li>
          <li><a href="">Order History</a></li>
          <li><a href="">Wishlist</a></li>
          <li><a href="">News Letter</a></li>
          <li><a href="">Return offer</a></li>
          <li><a href="">Track Order</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
      </div>
      <div className="col-md-2">
        <h6>Company</h6>
        <ul>
          <li><a href="">About Us</a></li>
          <li><a href="">We're Hiring</a></li>
          <li><a href="">Term & Condition</a></li>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Return Policy</a></li>
          <li><a href="">Payment Policy</a></li>
          <li><a href="">FAQ's</a></li>
        </ul>
      </div>
      <div className="col-md-4 social">
        <h6>Connect With Us</h6>
        <ul>
          <li><a href=""><i className="fa-brands fa-facebook fa-2x"></i></a></li>
          <li><a href=""><i className="fa-brands fa-twitter-square fa-2x"></i></a></li>
          <li><a href=""><i className="fa-brands fa-instagram-square fa-2x"></i></a></li>
          <li><a href=""><i className="fa-brands fa-youtube-square fa-2x"></i></a></li>
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