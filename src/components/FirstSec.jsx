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
            <Card cardimg={sData[0].cardimg} curprice={sData[0].curprice} realprice={sData[0].realprice}  cardCon={sData[0].cardCon} />
            <Card cardimg={sData[1].cardimg} curprice={sData[1].curprice} realprice={sData[1].realprice}  cardCon={sData[1].cardCon} />
            <Card cardimg={sData[2].cardimg} curprice={sData[2].curprice} realprice={sData[2].realprice}  cardCon={sData[2].cardCon} />
            <Card cardimg={sData[3].cardimg} curprice={sData[3].curprice} realprice={sData[3].realprice}  cardCon={sData[3].cardCon} /> 
        </div>
    </section>
    </>
  )
}


export default FirstSec;