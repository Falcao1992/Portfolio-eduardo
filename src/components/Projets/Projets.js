import React, { Component } from "react";
import "./Projets.css";
import mame from "./img/MAME screenshot.PNG";
import wildSpace from "./img/Wild-Space screenshot.PNG";
import horrorTeaser from "./img/Horror-Teaser screenshot.PNG";
import miniGameNoel from "./img/mini-game-noel.PNG";
import simpleParallax from "simple-parallax-js";
import gitHub from "./img/logo git_hub.png";

class Projets extends Component {
  constructor(props) {
    super(props);
    this.myRefMame = React.createRef();
    this.myRefSpace = React.createRef();
    this.myRefHorror = React.createRef();
    this.myRefMiniGames = React.createRef();
  }

  componentDidMount() {
    new simpleParallax(this.myRefMame.current, {
      delay: 1.6,
      transition: "cubic-bezier(0,0,0,1)"
    });
    new simpleParallax(this.myRefSpace.current, { overflow: true });
    new simpleParallax(this.myRefHorror.current, { orientation: "right" });
    new simpleParallax(this.myRefMiniGames.current, { scale: 1.4 });

    console.log(this.myRefMame);
  }
  render() {
    return (
      <div className="Projets__content">
        <div id="projets" className="projet-content projet-content-Mame ">
          <a
            className="projet__lien"
            href="https://mame-wild-project.netlify.com"
          >
            Site Web de Mame <br />
          </a>

          <a href="https://github.com/Falcao1992/MAME-Project-1">
            <img src={gitHub} className="logo" alt="logo git-hub" />
          </a>

          <img
            className="projet-img"
            ref={this.myRefMame}
            src={mame}
            alt="projet Mame"
          />
        </div>
        <div className="projet-content">
          <a
            className="projet__lien"
            href="https://space-wild-project.netlify.com"
          >
            Space Wild <br />
          </a>
          <a href="https://github.com/Falcao1992/Wild-Space">
            <img src={gitHub} className="logo" alt="logo git-hub" />
          </a>

          <img
            className="projet-img"
            ref={this.myRefSpace}
            src={wildSpace}
            alt="projet Wild Space"
          />
        </div>
        <div className="projet-content">
          <a
            className="projet__lien"
            href="https://random-hollow-movies.netlify.com/"
          >
            Horror Movies <br />
          </a>
          <a href="https://github.com/Falcao1992/Random-hollow-movies">
            <img src={gitHub} className="logo" alt="logo git-hub" />
          </a>
          <img
            className="projet-img"
            ref={this.myRefHorror}
            src={horrorTeaser}
            alt="projet Horror movies"
          />
        </div>
        <div className="projet-content">
          <a
            className="projet__lien"
            href="https://mini-game-noel.netlify.com/"
          >
            Mini Game Noel <br />
          </a>
          <a href="https://github.com/Falcao1992/hackaton-noel">
            <img src={gitHub} className="logo" alt="logo git-hub" />
          </a>
          <img
            className="projet-img"
            ref={this.myRefMiniGames}
            src={miniGameNoel}
            alt="Mini jeux de Noel"
          />
        </div>
      </div>
    );
  }
}

export default Projets;
