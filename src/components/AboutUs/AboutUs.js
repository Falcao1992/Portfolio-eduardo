import React, { useRef, useEffect } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { gsap, Bounce } from "gsap";

import "./AboutUs.css";
import cv from "./img/CV.png";
import logoJs from "./img/logoJs.png";
import logoHtml from "./img/logoHtml.png";
import logoCss from "./img/logoCss.png";
import logoNode from "./img/logoNode.png";
import logoReact from "./img/logoReact.png";
import logoPhaser from "./img/logoPhaser.png";
import logoSql from "./img/logoSql.png";


function AboutUs() {
  let logoText = useRef(null);
  let logoHtmlRef = useRef(null);
  let logoCssRef = useRef(null);
  let logoNodeRef = useRef(null);
  let logoReactRef = useRef(null);
  let logoPhaserRef = useRef(null);
  let logoSqlRef = useRef(null);

  useEffect(() => {
  }, []);

  const handleAnimation = () => {

    gsap.to(logoCssRef, 3.2, {
      gridColumn: 5,
      gridRow: 1,
      top: 0,
      rotate: 360,
      ease: Bounce.easeOut
    });
    gsap.to(logoHtmlRef, 3.2, {
      gridColumn: 1,
      gridRow: 1,
      top: 0,
      rotate: 360,
      ease: Bounce.easeOut
    });
    gsap.to(logoReactRef, 3.2, {
      gridColumn: 1,
      gridRow: 2,
      top: 0,
      rotate: 360,
      ease: Bounce.easeOut
    });
    gsap.to(logoNodeRef, 3.2, {
      gridColumn: 5,
      gridRow: 2,
      top: 0,
      rotate: 360,
      ease: Bounce.easeOut
    });
    gsap.to(logoPhaserRef, 3.2, {
      gridColumn: 1,
      gridRow: 3,
      top: 0,
      rotate: 360,
      ease: Bounce.easeOut
    });
    gsap.to(logoSqlRef, 3.2, {
      gridColumn: 5,
      gridRow: 3,
      top: 0,
      rotate: 360,
      ease: Bounce.easeOut
    });
    gsap.to(logoText, 3.2, {
      opacity: 1,
      ease: Bounce.easeOut
    });
  };

  return (
    <>
      <Controller>
        <Scene
          triggerElement={".box1"}
          classToggle={[".box1", "fade-in"]}
          offset={-100}
          indicators={false}
          reverse={false}
        >
          <div className="img1" id="aboutUs">
            <div className="box box1">
              <h2 className="titre__box1" >Eduardo Lépine </h2>
              <div className="text">
                Bienvenue sur mon Portfolio, je m'apelle Eduardo Lépine et je
                suis actuellement en formation à la{" "}
                <a
                  href="https://www.wildcodeschool.com/fr-FR"
                  target="_blank"
                  without="true"
                  rel="noopener noreferrer"
                  className="WCD"
                >
                  Wild Code School
                </a>{" "}
                où je suis formé au metier de developpeur JavaScript sur le
                framework React.
              </div>
              <a
                href={cv}
                target="_blank"
                without="true"
                rel="noopener noreferrer"
              >
                <button className="learn">voir mon cv</button>
              </a>
            </div>
          </div>
        </Scene>
      </Controller>

      <div className="img2">
        <img
          className="logoJs"
          src={logoJs}
          alt="JavaScript"
        />
        <div className="container__logo">
          <img
            ref={el => {
              logoHtmlRef = el;
            }}
            className="logo logoHtml"
            src={logoHtml}
            alt="logo Html"
          />
          <img
            ref={el => {
              logoCssRef = el;
            }}
            className="logo logoCss"
            src={logoCss}
            alt="logo Css"
          />
          <img
            ref={el => {
              logoReactRef = el;
            }}
            className="logo logoReact"
            src={logoReact}
            alt="logo React"
          />
          <img
            ref={el => {
              logoNodeRef = el;
            }}
            className="logo logoNode"
            src={logoNode}
            alt="logo Node"
          />
          <img
            ref={el => {
              logoPhaserRef = el;
            }}
            className="logo logoPhaser"
            src={logoPhaser}
            alt="logo Phaser"
          />
          <img
            ref={el => {
              logoSqlRef = el;
            }}
            className="logo logoSql"
            src={logoSql}
            alt="logo Sql"
          />

          <p
            className="logo logoText"
            ref={el => {
              logoText = el;
            }}
          >
            Voici un apercu des languages et des frameworks que j'ai utilisé jusqu'à maintenant 
          </p>
          
          <button onClick={() => handleAnimation()} className="learnGrid">voir plus</button>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
