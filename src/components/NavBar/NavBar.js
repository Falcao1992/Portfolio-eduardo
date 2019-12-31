import React from "react";
import { bubble as Menu } from "react-burger-menu";
import "./NavBar.css";
import cv from "../AboutUs/img/CV.png";

class NavBar extends React.Component {
  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a className="menu-item" href="#home">
          Acceuil
        </a>
        <a className="menu-item" href="#aboutUs">
          Qui suis-je
        </a>
        <a className="menu-item" href="#projets">
          Projets
        </a>
        <a className="menu-item" href={cv} target="_blank" without="true" rel="noopener noreferrer">
          Contact
        </a>
      </Menu>
    );
  }
}

export default NavBar;
