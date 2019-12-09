import React, { Component } from "react";
import "./HeaderCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class HeaderCarousel extends Component {
  render() {
    return (
      <Carousel
        autoPlay={true}
        interval={6000}
        infiniteLoop={true}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        transitionTime={1000}
        showIndicators={false}
      >
        <div className="slide-container">
          <img
            className="slide__img kenburns-top-right"
            src="https://previews.123rf.com/images/scyther5/scyther51605/scyther5160500017/56962905-photographe-appareil-photo-moniteur-moniteur-design-ordinateur-portable-photo-%C3%A9cran-photographie-stock.jpg"
            alt="Bureau Desing"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div className="slide-container">
          <img
            className="slide__img kenburns-top-right"
            src="https://st3.depositphotos.com/1607243/17782/i/1600/depositphotos_177826624-stock-photo-computer-magazine-design-screen-modern.jpg"
            alt="Bureau Blanc"
          />
          <p className="legend">Legend 2</p>
        </div>
        <div className="slide-container">
          <img
            className="slide__img kenburns-top-right"
            src="https://tmv.tmvtours.fr/wp-content/uploads/sites/tours/NEWS_WILDSCHOOL.jpg"
            alt="Wild Code School"
         />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}

export default HeaderCarousel;
