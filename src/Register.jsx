import React from 'react';
import { Link } from 'react-router-dom';
import Bradcrumb from './components/Bradcrumb';
import Footer from './components/Footer';
import Header from './components/Header';

const Register = () => {
  return (
    <>
        <Header/>
        <Bradcrumb/>
        <img src='images/LoginHero.png' alt='' style={{width:"100%"}}/>
        <div className="Login-container container">
            <div className="row">
                <div className="col-md-6"><img src="images/Login-img.png" alt="" /></div>
                <div className="col-md-6 login-sec" style={{paddingTop:'2rem'}}>
                    <h4 >REGISTER</h4>
                    <form style={{marginTop:'0px'}}>
                        <input type="text" placeholder='Name'/>
                        <input type="text" placeholder='Email id'/>
                        <input type="text" placeholder='Phone no.'/>
                        <input type="password" placeholder='Password'/>
                        <button>REGISTER</button>
                    </form>
                    <p>Already have an AMIC Account <Link style={{color:"rgba(255, 166, 12, 1)"}} to='/login'>login here</Link></p>
                    <p className='orRegister'>or Register with</p>
                    <div className="login-with">
                       <a><i class="fa-3x fa-brands fa-facebook"></i></a>
                       <a href=""><i class="fa-3x fa-brands fa-google"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Register