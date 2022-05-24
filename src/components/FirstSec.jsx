import React from 'react';
import Card from './Card';
import sData from '../api/sData';

const FirstSec = () => {
  return (
    <>
      <div className="new-arrivel-heading-sec m-5">
        <h2 className="new-arrivel-heading">new <span>arrival</span></h2>
        <hr />
    </div>
      <section className="container-fluid cards-section">
        <div className="row d-flex gap-4 align-item-center justify-content-center">
            {
              sData.map(function ncard(val){
                return(
                  <Card cardimg={val.cardimg} cardCon={val.cardCon} curprice={val.curprice} realprice={val.realprice}/>
                )
              })
              
            }
        </div>
    </section>
    </>
  )
}


export default FirstSec;