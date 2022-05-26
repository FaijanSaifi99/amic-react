import React from 'react';
import Card from './components/Card';
import RelProApi from './api/RelProApi';
import Footer from './components/Footer';
import Header from './components/Header';
import Bradcrumb from './components/Bradcrumb';
import Accordian from './components/Accordian';
import { Link } from 'react-router-dom';
// 
const Product = () => {
  return (
    <>
    <Header/>
    <Bradcrumb/>

    <section className="container-fluid product-sec-main">
      <div className="row pt-5">
        <div className="col-md-8" id="pro-img-sec">
          <div className="product-img"><img src="images/pro-1.png" alt=""/></div>
          <ul id="pro-img-ul">
            <li><Link to="customize"><img className="pro-img" src="images/pro-1.png" alt=""/></Link></li>
            <li><Link to="customize"><img className="pro-img" src="images/pro-4.png" alt=""/></Link></li>
            <li><Link to="customize"><img className="pro-img" src="images/pro-2.png" alt=""/></Link></li>
            <li><Link to="customize"><img className="pro-img" src="images/pro-3.png" alt=""/></Link></li>
            <li><Link to="customize"><img className="pro-img" src="images/pro-2.png" alt=""/></Link></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4>Men's Blue One With the Universe Graphic Printed T-shirt</h4>
          <p className="prdct-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta ante egestas odio sollicitudin placerat. In bibendum, nisi in tempor egestas, </p>
          <p className="text-center mb-0">4/5 (Based on 2k+ ratings)</p>
          <ul className="rating mb-0">
            <li><Link to=""><i className="fa-solid fa-star"></i></Link></li>
            <li><Link to=""><i className="fa-solid fa-star"></i></Link></li>
            <li><Link to=""><i className="fa-solid fa-star"></i></Link></li>
            <li><Link to=""><i className="fa-solid fa-star"></i></Link></li>
            <li><Link to=""><i className="fa-solid fa-star"></i></Link></li>
          </ul>
          <h3 className="prdct-price">Rs. 350.00 <strike>Rs. 500.00</strike></h3>
          <div className="prdct-discount">-30% Off</div>
          <div id="sizes-category" className="mt-3 prdct-size"><span > sizes</span>
            <ul className="d-flex justify-content-start pl-0" id="prdct-size">
                <li><Link to="">S</Link></li>
                <li><Link to="">M</Link></li>
                <li><Link to="">L</Link></li>
                <li><Link to="">XL</Link></li>
                <li><Link to="">2XL</Link></li>
                <li><Link to="">3XL</Link></li>
            </ul>
          </div>
          <div className="color-cat">colors</div>
          <ul id="color-category">
              <li  id="orange"><Link to=""></Link></li>
              <li  id="red"><Link to=""></Link></li>
              <li  id="green"><Link to=""></Link></li>
              <li  id="blue"><Link to=""></Link></li>
              <li  id="black"><Link to=""></Link></li>
              <li  id="white"><Link to=""></Link></li>
          </ul>
          <div className="cart-div">
            <Link className="add-to-cart" to="">Add To Cart</Link>
            <Link className="add-to-favourite" to=""><i className="fas fa-2x fa-thin fa-heart"></i></Link>
          </div>
          <div id="cat-fil">
            <ul className="d-flex pl-0 pr-0 mt-5" id="prdct-fil">
                
                <Accordian/>
                <Accordian/>
                <Accordian/>
                <Accordian/>
                <Accordian/>
            </ul>
        </div>
        </div>
        
      </div>
    </section>


    <div className="new-arrivel-heading-sec m-3">
      <h2 className="new-arrivel-heading">Related<span>Products</span></h2>
      <hr />
  </div>

  <section className="container-fluid cards-section">
    <div className="row d-flex gap-4 align-item-center justify-content-center">
    {RelProApi.map(function ncard(val) {
                  return (
                    <Card
                      cardimg={val.cardimg}
                      cardCon={val.cardCon}
                      curprice={val.curprice}
                      realprice={val.realprice}
                    />
                  );
                })}
    </div>
</section>
<Footer/>
    </>
  )
}

export default Product