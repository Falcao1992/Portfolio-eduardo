import React, { useState } from "react";
import "./Stage.css";

function Stage() {
  const [index, setIndex] = useState(1);

  const changeIndex = () => {
    if (index >= 3) {
      setIndex(1);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="stage__content" id="stage">
      <div className={index === 1 ? "isVisible" : "notVisible"}>
        <h1 className="question">pourquoi je recherche un stage ?</h1>
        <p className="reponse">
          Afin d'avoir une première expérience professionnelle, de travailler
          avec des développeurs expérimentés pour acquérir de nouvelles
          compétences et de partager les miennes, pour but final de développer
          des projets clients et de valider ma formation en obtenant le diplôme
          certifié RNCP pour faire reconnaitre mes compétences
        </p>
      </div>
      <div className={index === 2 ? "isVisible" : "notVisible"}>
        <h1 className="question">la reconversion, pourquoi ?</h1>
        <p className="reponse">
          Car pour moi ce métier regroupe énormément de point positif afin d'y
          avoir une carrière durable et épanouissante.{" "}
        </p>
        <ul>
          <li>- Passion pour le codage</li>
          <li>- Challenge intellectuel constant</li>
          <li>- Apprentissage de l'anglais au quotidien</li>
          <li>
            - Ressource quasi-ilimité afin de faire évoluer ses compétences
          </li>
          <li>- Perspective de carrière</li>
          <li>- Secteur en pleine expansion</li>
        </ul>

        <p className="citation">
          " Choisir un métier que tu aimes et plus un seul jour tu ne devras
          travailler. "
        </p>
      </div>
      <div className={index === 3 ? "isVisible" : "notVisible"}>
        <h1 className="question">dates et durée de stage ?</h1>
        <p className="reponse">
          Le stage se déroulera à partir du 7 fevrier 2020 pour une durée de 2 à
          4 mois, pour tout autre renseignement complémentaire je vous invite
          bien-évidement à <a className="lien__footer" href="#footer">me contacter</a>.
        </p>
      </div>
      <div>
        <button
          type="button"
          className="button_stage"
          onClick={() => changeIndex()}
        >
          {" "}
          next{" "}
        </button>
      </div>
    </div>
  );
}

export default Stage;
