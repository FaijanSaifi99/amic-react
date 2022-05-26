import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bradcrumb from "./components/Bradcrumb";
import CartPrice from "./components/CartPrice";

const Checkout = () => {
  return (
    <>
      <Header />
      <Bradcrumb />
      <div className="container cart-body">
        <div className="row">
          <h2>Compelete your Order</h2>
          <div className="col-md-8">
            <div className="name-details">
              <form className="address-detail">
                <div className="name-detail">
                  <div className="mb-3 fname">
                    <label for="exampleInputEmail1" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3 lname">
                    <label for="exampleInputEmail1" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="phone-otp">
                  <div className="mb-3 phone">
                    <label for="exampleInputEmail1" className="form-label">
                      Phone No
                    </label>
                    <input
                      type="phone"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3 otp">
                    <label for="exampleInputEmail1" className="form-label">
                      OTP
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="address">

              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Full address
                  </label>
                  <textarea
                    type="text-aria"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="address-details">
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Country
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    /></div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        State
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      City
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Pincode
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>


                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Landmark
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </form>

            </div>
          </div>
          <div className="col-md-4">
            <CartPrice goto="" btnName="PAY" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
