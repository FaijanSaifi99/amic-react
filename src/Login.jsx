import React from 'react';
import { Link } from 'react-router-dom';
import Bradcrumb from './components/Bradcrumb';
import Footer from './components/Footer';
import Header from './components/Header';

const Login = () => {
  return (
    <>
        <Header/>
        <Bradcrumb/>
        <img src='images/LoginHero.png' alt='' style={{width:"100%"}}/>
        <div className="Login-container container-fluid">
            <div className="row">
                <div className="col-md-6"><img src="images/Login-img.png" alt="" /></div>
                <div className="col-md-6 login-sec">
                    <h2 className='display-5' style={{paddingTop:'2rem'}}>login/register</h2>
                    <p>for Latest trends, exciting offers and everything AMIC!</p>
                    <form>
                        <input type="text" placeholder='Enter Email ID / Phone No'/>
                        <input type="text" placeholder='Enter OTP'/>
                        <button>LOGIN</button>
                    </form>
                    <p className='orlogin'>or login with</p>
                    <div className="login-with">
                       <Link to = ""><i className="fa-3x fa-brands fa-facebook"></i></Link>
                       <Link to=""><i className="fa-3x fa-brands fa-google"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Login