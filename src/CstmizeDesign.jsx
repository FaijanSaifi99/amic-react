import React from 'react'
import { Link } from 'react-router-dom'

const CstmizeDesign = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light product-nav p-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#"><img src="images/logo.png" alt=""/></Link>
          <Link className="float-right save-btn" to="">Save Design</Link>
        </div>
      </nav>

    <section className="brdcrmb-sec ">
        <ul className="m-0">
            <li><Link className="back-btn" to="">Back</Link></li>
            <li><Link className="frn-bk-btn" id="frnt-btn" to="">Front</Link></li>
            <li><Link className="frn-bk-btn" id="back-btn" to="">Back</Link></li>
        </ul>
    </section>

    <section className="container-fluid">
        <div className="row">
            <div className="col-md-8 pb-4">
                <div className="cstmz-img-con">
                    <img src="images/customize.png" alt=""/>
                </div>
                <ul className="d-flex mgnfng">
                    <li><Link to=""><i className="fa fa-thin fa-magnifying-glass"></i></Link></li>
                    <li><Link to=""><i className="fa fa-thin fa-magnifying-glass-plus"></i></Link></li>
                    <li><Link to=""><i className="fa fa-thin fa-magnifying-glass-minus"></i></Link></li>
                </ul>
            </div>
            <div className="col-md-4 cstmz-side">
              <div className="d-flex justify-content-between">
                <h5 className="">Background Color Pick</h5>
                <p className="chng-rmv"><Link to="">Change</Link> | <Link to="">Remove</Link></p>
              </div>
              <div className="bg-clr-pick" >
                <Link to=""></Link>
              </div>
              <div className="add-elmnt-div"><strong>Add Elements</strong>
                <ul className="add-elmnt">
                  <li className="add-elmnt-list"><Link to=""><i className="fas fa-2x fa-thin fa-qrcode"></i></Link><span>Text</span> </li>
                  <li className="add-elmnt-list"><Link to=""><i className="fas fa-2x fa-thin fa-align-right"></i></Link>pargarphp</li>
                  <li className="add-elmnt-list"><Link to=""><i className="fas fa-2x fa-thin fa-qrcode"></i></Link><span>Logo</span> </li>
                  <li className="add-elmnt-list"><Link to=""><i className="fas fa-2x fa-thin fa-qrcode"></i></Link><span>Shape</span></li>
                  <li className="add-elmnt-list"><Link to=""><i className="fas fa-2x fa-thin fa-images"></i></Link><span>Image</span></li>
                  <li className="add-elmnt-list"><Link to=""><i className="fas fa-2x fa-thin fa-qrcode"></i></Link><span>QR Code</span></li>
                </ul>
              </div>
              <div className="elmnt-design">
                <h6>Elements in the design</h6>
                <div className="elmnt-design-item">Slogan</div>
                <div className="elmnt-design-item">Company Name</div>
                <div className="elmnt-design-item">Image</div>
              </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default CstmizeDesign