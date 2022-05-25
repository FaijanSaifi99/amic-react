import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Bradcrumb from './components/Bradcrumb';
import CartPrice from './components/CartPrice';

const Checkout = () => {
  return (
    <>
        <Header/>
        <Bradcrumb/>
        <div className="container cart-body">
        <div className="row">
          <h2>Compelete your Order</h2>
          <div className="col-md-8">
            <div className="address">
                <form action="">

                </form>
            </div>
            <div className="address">
                <form action="">
                    
                </form>
            </div>
          </div>
          <div className="col-md-4">
            <CartPrice/>
          </div>
        </div>
      </div>
        <Footer/>
    </>
  )
}

export default Checkout