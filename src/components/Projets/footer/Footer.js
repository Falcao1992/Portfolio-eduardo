import React from 'react';
import './Footer.css';
import logoGitHub from './img/logo-git_hub.png'
import logoLinked from './img/Linked-icon.png'
import logoMail from './img/Places-mail-message-icon.png'
import logoPhone from './img/Phone-icon.png'

const Footer =() => {

    return (
        <div className="footer__content" id="footer">
            <div className="footer__text">
                <p>Eduardo Lépine 2020. tous droits réservé</p>
            </div>
            <div className="footer__logo__content">
                <a href="https://github.com/Falcao1992?tab=repositories"><img className="logoFooter" alt="git-hub" src={logoGitHub}></img></a>
                <a href="https://www.linkedin.com/in/eduardo-l%C3%A9pine-d%C3%A9v-web-full-stack-320ba5194/" ><img className="logoFooter" alt="Linked" src={logoLinked}></img></a>
                <a href="tel:0618478933"><img className="logoFooter" src={logoPhone} alt="Phone"></img></a>
                <a href="mailto:eduardo.lepine.pro@gmail.com"><img className="logoFooter" alt="Mail" src={logoMail}></img></a>
            </div>
        </div>
    )
}

export default Footer;