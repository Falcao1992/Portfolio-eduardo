import React, { useState } from "react";
import "./Stage.css";

function Stage() {
  const [index, setIndex] = useState(1);

  const changeIndex = () => {
    if (index >= 2) {
      setIndex(1);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="stage__content">
      <div className={index === 1 ? "isVisible" : "notVisible"}>
        <h1 className="question">
          pourquoi avoir choisi la reconversion ?
        </h1>
        <p className="reponse">
          Car pour moi ce metier regroupe énormement de point positif afin d'y
          avoir une carriere durable et apanouissante :{" "}
        </p>
        <ul>
          <li>- Metier intelectuel (challenge intelectuel constant)</li>
          <li>- Apprentissage de l'anglais au quotidien</li>
          <li>- Passion pour le codage</li>
          <li>- Ressource quasi ilimité afin de faire evoluer ses competences</li>
          <li>- Confortf de travail</li>
          <li>- Perspective de carriere</li>
          <li>- Secteur en pleine expension</li>
          <li>- Salaire motivant</li>
        </ul>
        <p className="citation">
          
          " Choisir un métier que tu aimes et plus un seul jour tu ne devras
          travailler. "
        </p>
      </div>
      <div className={index === 2 ? "isVisible" : "notVisible"}>
        <h1 className="question">pourquoi je recherche un stage ?</h1>
        <p className="reponse">
          Afin d'avoir une premiere experiences professionelle, de travailler
          avec des developpeur expérimenté pour acquerir de nouvelles
          competences et de partager les miennes, pour but final de dévlopper
          des projets clients et de valider ma formation en obtenant le diplome
          RNCP pour faire reconnaitre mes competences
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
