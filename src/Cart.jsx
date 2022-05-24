import React from 'react'
import Bradcrumb from './components/Bradcrumb'
import Footer from './components/Footer'
import Header from './components/Header'

const Cart = () => {
  return (
    <>
        <Header/>
        <Bradcrumb/>
        <div className="container-fluid">
            <div className="row">
                <h3>my cart {} item</h3>
                <div className="col-md-9">
                    <div className="cart-item d-flex">
                        <img src="" alt="" />
                        <div className="item-content">
                            <h4>Men's Blue One With the Universe Graphic Printed T-shirt</h4>
                            <h3 className="prdct-price">Rs. 350.00 <strike>Rs. 500.00</strike></h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">

                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Cart