import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HeaderCarousel.css";
import { Carousel } from "react-responsive-carousel";

class HeaderCarousel extends Component {
  render() {
    return (
      <Carousel className="constainer-caroussel"
        autoPlay={true}
        interval={8000}
        infiniteLoop={true}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        transitionTime={2000}
        showIndicators={false}
      >
        <div className="slide-container" id="home">
          <img
            className="slide__img"
            src="https://www.valorecia.com/wp-content/uploads/2018/11/nouvelles-technologies.jpg"
            alt="Bureau Desing"
          />
          <p className="legend-slide tracking-in-contract-bck">bienvenue sur mon portfolio
          </p>
        </div>
        <div className="slide-container">
          <img
            className="slide__img"
            src="https://www.alain-bensoussan.com/wp-content/uploads/2017/05/34226189.jpg"
            alt="Bureau Blanc"
          />
          <p className="legend-slide tracking-in-contract-bck">mes projets
          </p>
        </div>
        <div className="slide-container">
          <img
            className="slide__img"
            src="https://tmv.tmvtours.fr/wp-content/uploads/sites/tours/NEWS_WILDSCHOOL.jpg"
            alt="Wild Code School"
          />
          <p className="legend-slide tracking-in-contract-bck">bienvenue sur mon portfolio
          </p>
        </div>
      </Carousel>
    );
  }
}

export default HeaderCarousel;
