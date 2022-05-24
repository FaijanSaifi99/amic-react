import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import RelProApi from './api/RelProApi';
import Bradcrumb from './components/Bradcrumb';
import Accordian from './components/Accordian';
import { Link } from 'react-router-dom';

const Customize = () => {
  return (
    <>
        <Header/>
        <Bradcrumb/>

    <section className="container-fluid product-sec-main">
      <div className="row pt-5">
        <div className="col-md-8" id="pro-img-sec">
          <div className="product-img"><img src="images/pro-1.png" alt=""/></div>
          <ul id="pro-img-ul">
            <li><a href="customize.html"><img className="pro-img" src="images/pro-1.png" alt=""/></a></li>
            <li><a href="customize.html"><img className="pro-img" src="images/pro-4.png" alt=""/></a></li>
            <li><a href="customize.html"><img className="pro-img" src="images/pro-2.png" alt=""/></a></li>
            <li><a href="customize.html"><img className="pro-img" src="images/pro-3.png" alt=""/></a></li>
            <li><a href="customize.html"><img className="pro-img" src="images/pro-2.png" alt=""/></a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4>Men's Blue One With the Universe Graphic Printed T-shirt</h4>
          <p className="prdct-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta ante egestas odio sollicitudin placerat. In bibendum, nisi in tempor egestas, </p>
          <p className="text-center mb-0">4/5 (Based on 2k+ ratings)</p>
          <ul className="rating mb-0">
            <li><a href=""><i className="fa-solid fa-star"></i></a></li>
            <li><a href=""><i className="fa-solid fa-star"></i></a></li>
            <li><a href=""><i className="fa-solid fa-star"></i></a></li>
            <li><a href=""><i className="fa-solid fa-star"></i></a></li>
            <li><a href=""><i className="fa-solid fa-star"></i></a></li>
          </ul>
          <h3 className="prdct-price">Rs. 350.00 <strike>Rs. 500.00</strike></h3>
          <div className="prdct-discount">-30% Off</div>
          <div id="sizes-category" className="mt-3 prdct-size"><span > sizes</span>
            <ul className="d-flex justify-content-start pl-0" id="prdct-size">
                <li><a href="">S</a></li>
                <li><a href="">M</a></li>
                <li><a href="">L</a></li>
                <li><a href="">XL</a></li>
                <li><a href="">2XL</a></li>
                <li><a href="">3XL</a></li>
            </ul>
          </div>
          <div className="color-cat">colors</div>
          <ul id="color-category">
              <li  id="orange"><a href=""></a></li>
              <li  id="red"><a href=""></a></li>
              <li  id="green"><a href=""></a></li>
              <li  id="blue"><a href=""></a></li>
              <li  id="black"><a href=""></a></li>
              <li  id="white"><a href=""></a></li>
          </ul>
          <div id="cat-fil">
            <ul className="d-flex pl-0 pr-0 mt-5" id="prdct-fil">
                
                <Accordian/>
                <Accordian/>
                <Accordian/>
                <Accordian/>
            </ul>
        </div>
          <h2 className='custmize-price'>Rs. 350 <strike>Rs. 500</strike></h2><span className="prdct-discount">-30% Off</span>
          <div className='custmize-btn'><Link className='custmize-btn' to='/customize-design'>Customize Design</Link></div>
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

export default Customize;