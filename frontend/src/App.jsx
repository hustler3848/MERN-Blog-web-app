/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero';
import Featured from './Components/Featured';
import Categories from './Components/Categories';
import LatestPosts from './Components/LatestPosts';
import PopularThisWeek from './Components/PopularThisWeek';
import StayInLoop from './Components/StayInLoop';
import Authors from './Components/Authors';
import GradientConnector from './Components/GradientConnector';


function App() {

  return (
    <div className="dmSans">
      <Header />
      <Hero />
      <LatestPosts />
      <Categories />
      <Featured />
      <GradientConnector />
      <Authors />
      <PopularThisWeek />
      <StayInLoop />
      <Footer />
    </div>
  )
}

export default App
