import React, { Component } from "react";
import "./Projets.css";
import mame from "./img/MAME screenshot.PNG";
import wildSpace from "./img/Wild-Space screenshot.PNG";
import horrorTeaser from "./img/Horror-Teaser screenshot.PNG";
import gitHub from "./img/logo git_hub.png";

class Projets extends Component {
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

          <img className="projet-img" src={mame} alt="projet Mame" />
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

          <img className="projet-img" src={wildSpace} alt="projet Wild Space" />
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
            src={horrorTeaser}
            alt="projet Horror movies"
          />
        </div>
      </div>
    );
  }
}

export default Projets;
