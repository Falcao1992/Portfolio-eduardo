import React, { Component } from "react";
import "./Projets.scss";
import wildCircus from "./img/wild-Circus.png";
import locationAppartements from "./img/location-appartements.png";
import mame from "./img/MAME screenshot.PNG";
import wildSpace from "./img/Wild-Space screenshot.PNG";
import horrorTeaser from "./img/Horror-Teaser screenshot.PNG";
import miniGameNoel from "./img/mini-game-noel.PNG";
import logoGitHub from "./img/logo git_hub.png";
import logoNetlify from "./img/logoNetlify.png";
import { Controller, Scene } from "react-scrollmagic";

class Projets extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      projets: [
        {
          id: 1,
          name: "Wild Circus",
          screenshot: wildCircus,
          netlify: "https://mame-wild-project.netlify.com",
          gitHub: "https://github.com/Falcao1992/MAME-Project-1"
        },
        {
          id: 2,
          name: "Location d'Appartements",
          screenshot: locationAppartements,
          netlify: "https://mame-wild-project.netlify.com",
          gitHub: "https://github.com/Falcao1992/MAME-Project-1"
        },
        {
          id: 3,
          name: "Site Web de Mame",
          screenshot: mame,
          netlify: "https://mame-wild-project.netlify.com",
          gitHub: "https://github.com/Falcao1992/MAME-Project-1"
        },
        {
          id: 4,
          name: "Wild Space",
          screenshot: wildSpace,
          netlify: "https://space-wild-project.netlify.com",
          gitHub: "https://github.com/Falcao1992/Wild-Space"
        },
        {
          id: 5,
          name: "Horror Teaser",
          screenshot: horrorTeaser,
          netlify: "https://random-hollow-movies.netlify.com",
          gitHub: "https://github.com/Falcao1992/Random-hollow-movies"
        },
        {
          id: 6,
          name: "Mini Jeux de Noël",
          screenshot: miniGameNoel,
          netlify: "https://mini-game-noel.netlify.com/",
          gitHub: "https://github.com/Falcao1992/hackaton-noel"
        }
      ]
    };
  }

  render() {
    const { projets } = this.state;
    return (
      <Controller>
         <Scene triggerElement={".boxProjets"} classToggle={[".boxProjets", "fade-inProjets"]} indicators={true}>
      <div className="projets__content  ">
        <div className="projets__texte boxProjets">
          <h1 id="projets">Mes Projets</h1>
          <p>
            Voici un apercu des differents projets sur lesquelle j'ai pu
            travailler depuis le début de mon apprentissage.
          </p>
        </div>
        <div className="wrapper__content boxProjets ">
          <div className="wrapper">
            {projets.map(projet => (
              <div key={projet.id} className={`item__6-0${projet.id}`}>
                <img src={projet.screenshot} target="_blank" alt="" />
                <div className="meta">
                  <h2>{projet.name}</h2>
                  <ul className="cta-list">
                    <li className="cta-item">
                      <a
                        href={projet.netlify}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={logoNetlify}
                          alt="logo Git Hub"
                          className="material-icons"
                        />
                      </a>
                    </li>
                    <li className="cta-item">
                      <a
                        href={projet.gitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={logoGitHub}
                          alt="logo Git Hub"
                          className="material-icons"
                        />
                      </a>
                    </li>
                    <li className="cta-item">
                      <i className="material-icons">&#xE80D;</i>
                    </li>
                    <li className="cta-item">
                      <i className="material-icons">&#xE5D4;</i>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </Scene>
      </Controller>
    );
  }
}

export default Projets;
