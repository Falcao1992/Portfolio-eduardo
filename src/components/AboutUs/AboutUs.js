import React from "react";
import "./AboutUs.css";
import cv from "./img/Capture CV.PNG";

const AboutUs = () => {
  return (
    <div className="about_us__content">
      <div className="cv__content">
        <a href={cv}>
          <img className="cv__img" src={cv} alt="cv eduardo lépine" />
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
