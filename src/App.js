import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HeaderCarousel from './components/Carousel/HeaderCarousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderCarousel />
      
    </div>
  );
}

export default App;
