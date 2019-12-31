import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HeaderCarousel from './components/Carousel/HeaderCarousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Projets from './components/Projets/Projets';
import AboutUs from './components/AboutUs/AboutUs';


function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderCarousel />
      <AboutUs />
      <Projets />
      
    </div>
  );
}

export default App;
