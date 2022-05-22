import React from 'react'

const Category = () => {
  return (
    <>
        <div className="new-arrivel-heading-sec m-3">
         <h2 className="new-arrivel-heading">Shop By <span>Catogery</span></h2>
      <hr style={{width: "11rem"}}/>
  </div>


  <div className=" container-fluid" id="category-section">
    <ul className="d-flex">
      <li><a href=""><img src="images/category-img/c-img1.png" alt=""/></a><span>jeans</span> </li>
      <li><a href=""><img src="images/category-img/c-img2.png" alt=""/></a><span>sports</span> </li>
      <li><a href=""><img src="images/category-img/c-img3.png" alt=""/></a><span>full slevees</span></li>
      <li><a href=""><img src="images/category-img/c-img4.png" alt=""/></a><span>plain</span></li>
      <li><a href=""><img src="images/category-img/c-img5.png" alt=""/></a><span>shorts</span></li>
      <li><a href=""><img src="images/category-img/c-img6.png" alt=""/></a><span>polo</span></li>
    </ul>
  
  </div>
    </>
  )
}

export default Category