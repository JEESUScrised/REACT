import React from 'react';
import './App.css';
import BikeHeader from './components/sections/BikeHeader/BikeHeader';
import BikeHero from './components/sections/BikeHero/BikeHero';
import BikeOffer from './components/sections/BikeOffer/BikeOffer';
import BikeQuote from './components/sections/BikeQuote/BikeQuote';
import BikeServices from './components/sections/BikeServices/BikeServices';
import BikeRental from './components/sections/BikeRental/BikeRental';
import Footer from './components/sections/Footer/Footer';

function App(){
  return (
    <div>
      <BikeHeader/>
      <main>
        <BikeHero/>
        <BikeOffer/>
        <BikeQuote/>
        <BikeServices/>
        <BikeRental/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;


