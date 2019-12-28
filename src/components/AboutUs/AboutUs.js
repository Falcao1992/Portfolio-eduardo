import React from "react";
import "./AboutUs.css";
import { Controller, Scene } from "react-scrollmagic";

class AboutUs extends React.Component {
  render() {
    return (
      <Controller>
        <Scene triggerElement={".box1"} classToggle={[".box1", "fade-in"]} indicators={true}>
          <div class="img1">
            <div class="box box1">
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p class="date">02.02.20118</p>
              <div class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                est assumenda rerum magnam nesciunt quidem, iste officiis ullam
                doloremque earum delectus atque fugit dolorem ratione magni amet
                corrupti necessitatibus eius officia itaque. Assumenda et
                facilis iusto tenetur, beatae vero! Eius aut, quidem
              </div>
              <button class="learn">voir mon cv</button>
            </div>
          </div>
        </Scene>

        <Scene triggerElement={".box2"} classToggle={[".box2", "fade-in"]}>
          <div class="img2">
            <div class="box box2">
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p class="date">02.02.20118</p>
              <div class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                est assumenda rerum magnam nesciunt quidem, iste officiis ullam
                doloremque earum delectus atque fugit dolorem ratione magni amet
                corrupti necessitatibus eius officia itaque. Assumenda et
                facilis iusto tenetur, beatae vero! Eius aut, quidem
              </div>
              <button class="learn">LEARN MORE</button>
            </div>
          </div>
        </Scene>

        <Scene triggerElement={".box3"} classToggle={[".box3", "fade-in"]}>
          <div class="img3">
            <div class="box box3">
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p class="date">02.02.20118</p>
              <div class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                est assumenda rerum magnam nesciunt quidem, iste officiis ullam
                doloremque earum delectus atque fugit dolorem ratione magni amet
                corrupti necessitatibus eius officia itaque. Assumenda et
                facilis iusto tenetur, beatae vero! Eius aut, quidem
              </div>
              <button class="learn">LEARN MORE</button>
            </div>
          </div>
        </Scene>
      </Controller>
    );
  }
}

export default AboutUs;
