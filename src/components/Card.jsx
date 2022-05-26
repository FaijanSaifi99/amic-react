import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <>
        <Link to="" className="card p-0" >
                <div id="img-slide"><img src={props.cardimg} className="card-img-top" id="cis" alt="..."/></div>
                <div className= "card-body">
                  <p className="card-text">{props.cardCon}</p>
                  <div className="rate"><strong>Rs. {props.curprice}</strong>&nbsp; &nbsp;<strike>Rs. {props.realprice}</strike></div>
                </div>
        </Link>
    </>
  )
}

export default Card