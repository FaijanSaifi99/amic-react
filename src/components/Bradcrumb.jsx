import React from 'react'

function Bradcrumb() {
  return (
    <>
        <nav aria-label="breadcrumb" id="bradcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Men Clothing</li>
        <li className="breadcrumb-item active" aria-current="page">Men's T-shirts</li>
        <li className="breadcrumb-item active" aria-current="page">Plain T-shirts for Men</li>
      </ol>
    </nav>
    </>
  )
}

export default Bradcrumb