import React from 'react'

const CstmizeDesign = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light product-nav p-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="images/logo.png" alt=""/></a>
          <a class="float-right save-btn" href="">Save Design</a>
        </div>
      </nav>

    <section class="brdcrmb-sec ">
        <ul class="m-0">
            <li><a class="back-btn" href="">Back</a></li>
            <li><a class="frn-bk-btn" id="frnt-btn" href="">Front</a></li>
            <li><a class="frn-bk-btn" id="back-btn" href="">Back</a></li>
        </ul>
    </section>

    <section class="container-fluid">
        <div class="row">
            <div class="col-md-8 pb-4">
                <div class="cstmz-img-con">
                    <img src="images/customize.png" alt=""/>
                </div>
                <ul class="d-flex mgnfng">
                    <li><a href=""><i class="fa fa-thin fa-magnifying-glass"></i></a></li>
                    <li><a href=""><i class="fa fa-thin fa-magnifying-glass-plus"></i></a></li>
                    <li><a href=""><i class="fa fa-thin fa-magnifying-glass-minus"></i></a></li>
                </ul>
            </div>
            <div class="col-md-4 cstmz-side">
              <div class="d-flex justify-content-between">
                <h5 class="">Background Color Pick</h5>
                <p class="chng-rmv"><a href="">Change</a> | <a href="">Remove</a></p>
              </div>
              <div class="bg-clr-pick" >
                <a href=""></a>
              </div>
              <div class="add-elmnt-div"><strong>Add Elements</strong>
                <ul class="add-elmnt">
                  <li class="add-elmnt-list"><a href=""><i class="fas fa-2x fa-thin fa-qrcode"></i></a><span>Text</span> </li>
                  <li class="add-elmnt-list"><a href=""><i class="fas fa-2x fa-thin fa-align-right"></i></a>pargarphp</li>
                  <li class="add-elmnt-list"><a href=""><i class="fas fa-2x fa-thin fa-qrcode"></i></a><span>Logo</span> </li>
                  <li class="add-elmnt-list"><a href=""><i class="fas fa-2x fa-thin fa-qrcode"></i></a><span>Shape</span></li>
                  <li class="add-elmnt-list"><a href=""><i class="fas fa-2x fa-thin fa-images"></i></a><span>Image</span></li>
                  <li class="add-elmnt-list"><a href=""><i class="fas fa-2x fa-thin fa-qrcode"></i></a><span>QR Code</span></li>
                </ul>
              </div>
              <div class="elmnt-design">
                <h6>Elements in the design</h6>
                <div class="elmnt-design-item">Slogan</div>
                <div class="elmnt-design-item">Company Name</div>
                <div class="elmnt-design-item">Image</div>
              </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default CstmizeDesign