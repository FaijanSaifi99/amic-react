import React from 'react';
import Category from './components/Category';
import DCD from './components/Deal&ColorDay';
import FirstSec from './components/FirstSec';
import Footer from './components/Footer';

import  Header  from './components/Header';
import  Hero  from './components/Hero';
import Marvel from './components/Marvel';
import SecondSec from './components/SecondSec';

function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <DCD/>
      <Marvel/>
      <FirstSec/>
      <SecondSec/>
      <Category/>
      <Footer/>
    </>
  );
}

export default Home;
