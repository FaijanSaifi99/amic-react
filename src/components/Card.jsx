import React from 'react';

const Card = (props) => {
  return (
    <>
        <a href="/" target="_" className="card p-0" >
                <div id="img-slide"><img src={props.cardimg} className="card-img-top" id="cis" alt="..."/></div>
                <div className= "card-body">
                  <p className="card-text">{props.cardCon}</p>
                  <div className="rate"><strong>Rs. {props.curprice}</strong>&nbsp; &nbsp;<strike>Rs. {props.realprice}</strike></div>
                </div>
        </a>
    </>
  )
}

export default Card