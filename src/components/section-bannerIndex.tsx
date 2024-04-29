import React from 'react'

import { StaticImage } from "gatsby-plugin-image";
import ArrowDown from "../images/svg/arrow-down.svg";

const SectionBannerIndex: React.FC = () => {
  return (
    <section className="section section--banner">
    <div className="content-section content--banner">
        <div className="banner-text">
            <h1 className="tittle-banner">
                <span>Compartimos</span>  en comunidad
            </h1>
            <p>Aprende y conecta con otros apasionados por la tecnología</p>
            <a className="btn btn-ghost items-center" href="#about">Conoce lo que hacemos 
                <ArrowDown/>
            </a>
        </div>
        <div className="banner-image">
        <StaticImage className='img'
                src="../images/banner-index.png"
                alt="Descripción de la imagen"
                placeholder="blurred" 
                />
        </div>
    </div>
</section>
  )
}

export default SectionBannerIndex