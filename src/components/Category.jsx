import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <>
        <div className="new-arrivel-heading-sec m-3">
         <h2 className="new-arrivel-heading">Shop By <span>Catogery</span></h2>
      <hr style={{width: "11rem"}}/>
  </div>


  <div className=" container-fluid" id="category-section">
    <ul className="d-flex">
      <li><Link to=""><img src="images/category-img/c-img1.png" alt=""/></Link><span>jeans</span> </li>
      <li><Link to=""><img src="images/category-img/c-img2.png" alt=""/></Link><span>sports</span> </li>
      <li><Link to=""><img src="images/category-img/c-img3.png" alt=""/></Link><span>full slevees</span></li>
      <li><Link to=""><img src="images/category-img/c-img4.png" alt=""/></Link><span>plain</span></li>
      <li><Link to=""><img src="images/category-img/c-img5.png" alt=""/></Link><span>shorts</span></li>
      <li><Link to=""><img src="images/category-img/c-img6.png" alt=""/></Link><span>polo</span></li>
    </ul>
  
  </div>
    </>
  )
}

export default Category