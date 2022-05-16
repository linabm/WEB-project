import React, { useState } from 'react';
import Announcement from '../components/Announcement'
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Sliders from '../components/Sliders'


const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Sliders/>
      <Categories/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default Home
