import React, { useState } from "react";
import Bradcrumb from "./components/Bradcrumb";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CartItem from "./components/CartItem";
import CartPrice from "./components/CartPrice";
import CartApi from "./api/CartApi";

const Cart = () => {
  return (
    <>
      <Header />
      <Bradcrumb />
      <div className="container cart-body">
        <div className="row">
          <h2>My Cart {} item</h2>
          <div className="col-md-8">
            {
              CartApi.map((val)=>{
                return <CartItem 
                  img = {val.img}
                  title = {val.title}
                  curprice = {val.curprice}
                  actualprice = {val.actualprice}
                />
              })
            }
            
          </div>
          <div className="col-md-4">
            <CartPrice goto="/checkout" btnName="CHECKOUT"/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
