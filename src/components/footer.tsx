import React from 'react'
import Logo from "../images/svg/logo_blank.svg";


//Socials
import Instragram from "../images/svg/instagram.svg";
import Linkendin from "../images/svg/linkedin.svg";
import Facebook from "../images/svg/facebook.svg";
import Youtube from "../images/svg/youtube.svg";
import Twitch from "../images/svg/twitch.svg";
import Twitter from "../images/svg/twitter.svg";


const Footer: React.FC = () => {
  return (
    <footer  className="footer">
        <div className="content--footer">
            <div className="footer__links">
                <div className="footer-about">
                    <p className="title">Sobre nosotros</p>
                    <ul className="footer-about--list">
                        <li>
                            <a href="#">Nuestra comunidad</a>
                        </li>
                        <li>
                            <a href="#">Nuestros eventos</a>
                        </li>
                        <li>
                            <a href="#">Código de conducta</a>
                        </li>
                    </ul>                    
                </div>
                <div className="footer-encuentranos">
                    <p className="title">Encuéntranos en</p>
                    <ul className="footer__list-social">
                        <li className="footer--item__social">
                            <a href="#">
                                <Instragram/>
                            </a>
                        </li>
                        <li className="footer--item__social">
                            <a href="#">
                                <Linkendin/>
                            </a>
                        </li>
                        <li className="footer--item__social">
                            <a href="#">
                                <Facebook/>
                            </a>
                        </li>
                        <li className="footer--item__social">
                            <a href="#">
                                <Youtube/>
                            </a>
                        </li>
                        <li className="footer--item__social">
                            <a href="#">
                                <Twitch/>
                            </a>
                        </li>
                        <li className="footer--item__social">
                            <a href="#">
                                <Twitter/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__logo">
                {/* <img width="75" height="75" src="./../images/svg/logo_blank.svg" alt=""> */}
                <Logo  width="75" height="75"/>
                <p>ZonaTech Perú</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer