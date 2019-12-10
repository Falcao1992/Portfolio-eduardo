import React from "react";
import { bubble as Menu } from "react-burger-menu";
import "./NavBar.css";

class NavBar extends React.Component {
  

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a className="menu-item" href="#home">
          Acceuil
        </a>
        <a className="menu-item" href="#projets">
          Projets
        </a>
        <a className="menu-item" href="#aboutUs">
          A Propos
        </a>
        <a id="contact" className="menu-item" href="/">
          Contact
        </a>
        
      </Menu>
    );
  }
}

export default NavBar;
