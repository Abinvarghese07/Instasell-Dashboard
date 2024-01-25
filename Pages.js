import React from 'react';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Hero from './Hero';
import Footer from './Footer';


const Pages = () => {
    return (
        <div>
          <Navbar/>
          <Homepage/>
          <Hero/>
          <Footer/>
        </div>
    );
};

export default Pages;