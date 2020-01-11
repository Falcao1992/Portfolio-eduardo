import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HeaderCarousel from './components/Carousel/HeaderCarousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Projets from './components/Projets/Projets';
import AboutUs from './components/AboutUs/AboutUs';
import Stage from './components/Stages/Stage';


function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderCarousel />
      <AboutUs />
      <Stage />
      <Projets />
      
      
    </div>
  );
}

export default App;
