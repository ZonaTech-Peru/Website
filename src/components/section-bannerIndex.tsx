import React from 'react'

import { StaticImage } from "gatsby-plugin-image";
import ArrowDown from "../images/svg/arrow-down_.svg";

const SectionBannerIndex: React.FC = () => {
  return (
    <section className="section section--banner">
    <div className="content-section content--banner">
        <div className="banner-text">
            <h1 className="tittle-banner">
                <span>Compartimos</span>  en comunidad
            </h1>
            <p>Aprende y conecta con otros apasionados por la tecnología</p>
            <a className="btn btn-ghost items-center" href="#">Conoce nuestros eventos 
                <ArrowDown/>
                {/* <img src="../images/svg/arrow-down_.svg" alt=""> */}
            </a>
        </div>
        <div className="banner-image">
        <StaticImage className='img'
                src="../images/banner-index.png" // Ruta a tu archivo SVG relativa a la carpeta de imágenes
                alt="Descripción de la imagen"
                placeholder="blurred" // Opciones de carga, como "tracedSVG", "dominantColor", etc.
                />
            {/* <img src="../images/svg/banner-index.svg" alt=""> */}
        </div>
    </div>
</section>
  )
}

export default SectionBannerIndex