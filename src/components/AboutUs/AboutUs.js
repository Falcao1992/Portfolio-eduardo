import React from "react";
import "./AboutUs.css";
import cv from "./img/CV.png";
import logoHtml from "./img/logo-html.png"

import { Controller, Scene } from "react-scrollmagic";
import { Power4, TweenMax, TweenLite } from "gsap";

class AboutUs extends React.Component {

  constructor(props){
    super(props);
    // reference to the DOM node
    this.myElement = null;
    // reference to the animation
    this.myTween = null;
  }

  componentDidMount(){
    // use the node ref to create the animation
    this.myTween = TweenLite.from(this.myElement, 1, {left: -700, rotation: -50, ease: Power4.easeInOut});
  }

  render() {
    return (
      <Controller>
        <Scene
          triggerElement={".box1"}
          classToggle={[".box1", "fade-in"]}
          indicators={true}
          offset={30}
          reverse={false}
        >
          <div className="img1">
            <div className="box box1">
              <h2 className="titre__box1">Eduardo Lépine </h2>
              <div className="text">
                Bienvenue sur mon Portfolio, je m'apelle Eduardo Lépine et je
                suis actuellement en formation à la{" "}
                <a
                  href="https://www.wildcodeschool.com/fr-FR"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  className="WCD"
                >
                  Wild Code School
                </a>{" "}
                où je suis formé au metier de developpeur JavaScript sur le
                framework React.
              </div>
              <a href={cv} target="_blank" without rel="noopener noreferrer">
                <button className="learn">voir mon cv</button>
              </a>
            </div>
          </div>
        </Scene>
        <img ref={this.myElement} class="logo" src={logoHtml} alt="logo html" />

        <Scene
          triggerElement={".box2"}
          classToggle={[".box2", "fade-in"]}
          offset={30}
          reverse={false}
        >
          <div className="img2">
            <div className="box box2">
              <div >
              </div>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p className="date">02.02.20118</p>
              <div className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                est assumenda rerum magnam nesciunt quidem, iste officiis ullam
                doloremque earum delectus atque fugit dolorem ratione magni amet
                corrupti necessitatibus eius officia itaque. Assumenda et
                facilis iusto tenetur, beatae vero! Eius aut, quidem
              </div>
              <button className="learn">LEARN MORE</button>
            </div>
          </div>
        </Scene>

        <Scene
          triggerElement={".box3"}
          classToggle={[".box3", "fade-in"]}
          offset={30}
          reverse={false}
        >
          <div className="img3">
            <div className="box box3">
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p className="date">02.02.20118</p>
              <div className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                est assumenda rerum magnam nesciunt quidem, iste officiis ullam
                doloremque earum delectus atque fugit dolorem ratione magni amet
                corrupti necessitatibus eius officia itaque. Assumenda et
                facilis iusto tenetur, beatae vero! Eius aut, quidem
              </div>
              <button className="learn">LEARN MORE</button>
            </div>
          </div>
        </Scene>
      </Controller>
    );
  }
}

export default AboutUs;
