import React from 'react';
import { Route, Routes } from "react-router-dom";
import Listing from './Listing';
import Home from './Home';
import Product from './Product';
import Customize from './Customize';
import CstmizeDesign from './CstmizeDesign';
import Login from './Login';
import Register from './Register';
import Cart from './Cart';
import Checkout from './Checkout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/listing' element={<Listing/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/customize' element={<Customize/>} />
        <Route path='/customize-design' element={<CstmizeDesign/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
    </>
  );
}

export default App;
