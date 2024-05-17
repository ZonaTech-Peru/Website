import React from 'react'
import Logo from "../images/svg/logo_blank.svg";


//Socials
import Instragram from "../images/svg/instagram.svg";
import Linkendin from "../images/svg/linkedin.svg";
import Facebook from "../images/svg/facebook.svg";
import Youtube from "../images/svg/youtube.svg";
import Twitch from "../images/svg/twitch.svg";
import Tiktok from "../images/svg/twitter.svg";
import Twitter from "../images/svg/tiktok.svg";


const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="content--footer">
                <div className="footer__links">
                    <div className="footer-about">
                        <p className="title">Sobre nosotros</p>
                        <ul className="footer-about--list">
                            <li>
                                <a href="https://discord.gg/rgGqrCG7ST">Nuestra comunidad</a>
                            </li>
                            <li>
                                <a href="/eventos">Nuestros eventos</a>
                            </li>
                            <li>
                                <a href="/#about">Código de conducta</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-encuentranos">
                        <p className="title">Encuéntranos en</p>
                        <ul className="footer__list-social">
                            <li className="footer--item__social">
                                <a href="https://www.tiktok.com/@zonatechorgpe">
                                    <Tiktok />
                                </a>
                            </li>
                            <li className="footer--item__social">
                                <a href="https://www.instagram.com/zonatechorgpe/">
                                    <Instragram />
                                </a>
                            </li>
                            <li className="footer--item__social">
                                <a href="https://www.linkedin.com/company/zonatechorgpe/">
                                    <Linkendin />
                                </a>
                            </li>
                            <li className="footer--item__social">
                                <a href="https://www.youtube.com/@zonatechorgpe">
                                    <Youtube />
                                </a>
                            </li>
                            <li className="footer--item__social">
                                <a href="https://www.facebook.com/zonatechorgpe">
                                    <Facebook />
                                </a>
                            </li>
                            <li className="footer--item__social">
                                <a href="https://www.twitch.tv/zonatechorgpe">
                                    <Twitch />
                                </a>
                            </li>
                            <li className="footer--item__social">
                                <a href="https://twitter.com/zonatechorgpe">
                                    <Twitter />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__logo">
                    <Logo width="75" height="75" />
                    <p>ZonaTech Perú</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer