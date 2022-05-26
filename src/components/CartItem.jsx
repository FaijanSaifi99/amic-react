import React from 'react';


const CartItem = ({img, title, curprice , actualprice}) => {


  
  return (
    <>
       <div className="cart-item">
              <button className="remove_item">x</button>
              <div className="d-flex cart-content"> 
              <div className="cartimg"><img src={img} alt="" /></div>
              <div className="item-content">
                <h5>
                {title}
                </h5>
                <h2 className="prdct-price ">
                  Rs. {curprice} <strike>Rs. {actualprice}</strike>
                </h2>
                <label for="quantity">Qty</label>
                <select name="quantity" id="quantity">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>

                <label for="size" id="sizes">size</label>
                <select name="size" id="size">
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
              </div>
            </div>
    </>
  )
}

export default CartItem