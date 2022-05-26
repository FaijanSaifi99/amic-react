import React from 'react'
import { Link } from 'react-router-dom';
import CartApi from '../api/CartApi';

const CartPrice = (props) => {

 
  const ff = CartApi.map(item => item.curprice);

  const cartamount = ff.reduce((a, b) => a + b, 0)
  
  
  
  // const cartamount = CartApi[0].curprice;
  console.log(cartamount)
  return (
    <>
        <div className="price_summery">
              <h5>PRICE SUMMERY</h5>
              <div className="price-container"> 
              <div className="price-detail">
                <ul>
                  <li>Total MRP (Incl. of taxes) <span>Rs. 44{}</span></li>
                  <li>Delivery Fee  <span>Free{}</span> </li>
                  <li>Bag Discount  <span>-Rs. 49</span></li>
                  <li>Subtotal <span>49</span></li>
                </ul>
              </div>
              <h2 className="total_price ">Total -<span>{cartamount}</span></h2>
              <button className="checkout_btn"><Link to={props.goto} >{props.btnName}</Link></button>
              </div>
            </div>
    </>
  )
}

export default CartPrice