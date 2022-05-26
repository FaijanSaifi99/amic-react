import React from 'react'
import { Link } from 'react-router-dom';

const SecondSec = () => {
  return (
    <>
    <section className="container-fluid second-section">
     <div className="row">
      <div className="col-md-6">
        <Link to="/"><img src="images/winter-cap.png" alt=""/></Link>
      </div>
      <div className="col-md-6 second-section-sec-img">
        <Link to="/"><img src="images/save.png" alt=""/></Link>
        <Link to="/"><img src="images/try.png" alt=""/></Link>
      </div>
     </div>
        
      
    </section>
    </>
  )
}

export default SecondSec;