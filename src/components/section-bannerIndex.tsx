import React from 'react'

import { StaticImage } from "gatsby-plugin-image";
import ArrowDown from "../images/svg/arrow-down.svg";

const SectionBannerIndex: React.FC = () => {
  return (
    <section className="section section--banner">
    <div className="content-section content--banner">
        <div className="banner-text">
            <h1 className="tittle-banner">
                <span>Aprende</span> y <span>conecta</span> con otros apasionados por la tecnología
            </h1>
            <a className="btn btn-ghost items-center" href="#events">Conoce nuestros eventos 
                <ArrowDown/>
            </a>
        </div>
        <div className="banner-image">
        <StaticImage className='img'
                src="../images/banner.jpg"
                alt="Descripción de la imagen"
                placeholder="blurred" 
                // width={933}
                height={555}
                objectFit="cover"
                />
        </div>
    </div>
</section>
  )
}

export default SectionBannerIndex