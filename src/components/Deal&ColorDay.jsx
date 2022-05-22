import React from "react";

const DCD = () => {
  return (
    <>
      <div className="DCD-container container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img src="/images/deal.png" alt="jj" />
            <button id='deal-button' className='DCD-button' href="">Deal Of The Day</button>
          </div>
          <div className="col-md-6">
            <img src="/images/color.png" alt="jj" />
            <button id='color-button' className='DCD-button' href="">Color Of The Day</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DCD;
