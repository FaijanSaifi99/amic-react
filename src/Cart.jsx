import React from "react";
import Bradcrumb from "./components/Bradcrumb";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CartItem from "./components/CartItem";
import CartPrice from "./components/CartPrice";

const Cart = () => {
  return (
    <>
      <Header />
      <Bradcrumb />
      <div className="container cart-body">
        <div className="row">
          <h2>My Cart {} item</h2>
          <div className="col-md-8">
            <CartItem/>
            <CartItem/>
            <CartItem/>
          </div>
          <div className="col-md-4">
            <CartPrice/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
