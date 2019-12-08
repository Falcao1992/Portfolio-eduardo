import React from "react";
import { bubble as Menu } from "react-burger-menu";
import "./NavBar.css";

class NavBar extends React.Component {
  

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">
          Acceuil
        </a>
        <a id="projets" className="menu-item" href="#projets">
          Projets
        </a>
        <a id="contact" className="menu-item" href="/">
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
