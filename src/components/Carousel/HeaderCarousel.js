import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HeaderCarousel.css";
import { Carousel } from "react-responsive-carousel";
import { Power4, TweenMax, Circ } from "gsap";
import charming from "charming";

import slide1 from "./img/slide1.jpg";
import slide2 from "./img/slide2.jpg";
import slide3 from "./img/slide3.jpg";

class HeaderCarousel extends Component {
  // FONCTION POUR FAIRE "EXPLOSER" LES LETTRES
  explosionIn = e => {
    charming(e.currentTarget);
    let letters = Array.from(e.target.childNodes);
    for (let i = 0; i < letters.length; i++) {
      TweenMax.to(letters[i], 1, {
        x: Math.floor(Math.random() * 300 - 150),
        y: Math.floor(Math.random() * 200 - 100),
        z: Math.floor(Math.random() * 300 - 150),
        rotation: Math.floor(Math.random() * 300 - 150),
        ease: Circ.easeOut
      });
    }
  };

  // FONCTION POUR FAIRE "RASSEMBLER" LES LETTRES
  explosionOut = e => {
    charming(e.currentTarget);
    let letters = Array.from(e.target.childNodes);
    for (let k = 0; k < letters.length; k++) {
      TweenMax.to(letters[k], 1, {
        x: 0,
        y: 0,
        z: 0,
        rotation: 0,
        ease: Power4.easeIn
      });
    }
  };

  render() {
    return (
      <Carousel
        className="constainer-caroussel"
        autoPlay={true}
        interval={8000}
        infiniteLoop={true}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        transitionTime={2000}
        showIndicators={false}
      >
        <div className="slide-container">
          <img className="slide__img" src={slide1} alt="Qui suis-je" />
          
            <p
              className="legend-slide tracking-in-contract-bck"
              onMouseEnter={this.explosionIn}
              onMouseLeave={this.explosionOut}
            >
              {" "}
              qui&nbsp;suis&nbsp;je&nbsp;?
            </p>
          
        </div>
        <div className="slide-container" id="home">
          <img className="slide__img" src={slide2} alt="Mes Projets" />
            <p
              className="legend-slide tracking-in-contract-bck"
              onMouseEnter={this.explosionIn}
              onMouseLeave={this.explosionOut}
            >
              mes&nbsp;projets
            </p>

        </div>
        <div className="slide-container">
          <img className="slide__img" src={slide3} alt="Wild Code School" />
            <p
              className="legend-slide tracking-in-contract-bck"
              onMouseEnter={this.explosionIn}
              onMouseLeave={this.explosionOut}
            >
              contact
            </p>
        </div>
      </Carousel>
    );
  }
}

export default HeaderCarousel;
