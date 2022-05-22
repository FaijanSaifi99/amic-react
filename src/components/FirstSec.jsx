import React from 'react';
import Card from './Card';

const FirstSec = () => {
  return (
    <>
      <div className="new-arrivel-heading-sec m-5">
        <h2 className="new-arrivel-heading">new <span>arrival</span></h2>
        <hr />
    </div>
      <section className="container-fluid cards-section">
        <div className="row d-flex gap-4 align-item-center justify-content-center">
            <Card cardimg='/images/card-img.png' cardP='sdf' curprice='350' realprice='500' cardCon="Men's Blue One With the Universe Graphic Printed T-shirt"/>
            <Card cardimg='/images/card-img.png' cardP='sdf' curprice='350' realprice='500' cardCon="Men's Blue One With the "/>
            <Card cardimg='/images/card-img.png' cardP='sdf' curprice='350' realprice='500' cardCon="Men's Blue One With the Universe Graphic Printed T-shirt"/>
            <Card cardimg='/images/card-img.png' cardP='sdf' curprice='350' realprice='500' cardCon="Men's Blue One With the "/> 
        </div>
    </section>
    </>
  )
}


export default FirstSec;