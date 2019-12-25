import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HeaderCarousel.css";
import { Carousel } from "react-responsive-carousel";
import { Power4 , TweenMax, Circ } from "gsap";
import charming from "charming";


class HeaderCarousel extends Component {

  // FONCTION POUR FAIRE "EXPLOSER" LES LETTRES
  explosionIn = (e) => {
    charming(e.currentTarget);
    let letters = Array.from(e.target.childNodes);
    for(let i = 0; i < letters.length; i++ ) {
      TweenMax.to(letters[i],1,{
        x: Math.floor(Math.random() * 500 - 250),
        y: Math.floor(Math.random() * 500 - 250),
        z: Math.floor(Math.random() * 500 - 250),
        rotation: Math.floor(Math.random() * 500 - 250),
        ease: Circ.easeOut
      })
    }
  }

  // FONCTION POUR FAIRE "RASSEMBLER" LES LETTRES
    explosionOut = (e) => {
      charming(e.currentTarget);
      let letters = Array.from(e.target.childNodes);
      for(let k = 0; k < letters.length; k++ ) {
        TweenMax.to(letters[k],1,{
          x: 0,
          y: 0,
          z: 0,
          rotation: 0,
          ease: Power4.easeIn
        })
      }
    }

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
  <p className="legend-slide tracking-in-contract-bck" onMouseEnter={this.explosionIn} onMouseLeave={this.explosionOut}>mes <br/> projets
          </p>
        </div>
        <div className="slide-container">
          <img
            className="slide__img"
            src="https://www.alain-bensoussan.com/wp-content/uploads/2017/05/34226189.jpg"
            alt="Bureau Blanc"
          />
          <p className="legend-slide tracking-in-contract-bck" onMouseEnter={this.explosionIn} onMouseLeave={this.explosionOut}>  qui <br/> suis-je <br /> ?
          </p>
        </div>
        <div className="slide-container">
          <img
            className="slide__img"
            src="https://tmv.tmvtours.fr/wp-content/uploads/sites/tours/NEWS_WILDSCHOOL.jpg"
            alt="Wild Code School"
          />
          <p className="legend-slide tracking-in-contract-bck" onMouseEnter={this.explosionIn} onMouseLeave={this.explosionOut}>me <br/> contacter
          </p>
        </div>
      </Carousel>
    );
  }
}

export default HeaderCarousel;
