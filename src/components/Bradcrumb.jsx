import React from 'react'
import { Link } from 'react-router-dom'

function Bradcrumb() {
  return (
    <>
        <nav aria-label="breadcrumb" id="bradcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
    <li className="breadcrumb-item"><Link to="#">Library</Link></li>
    <li className="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
    </>
  )
}

export default Bradcrumb