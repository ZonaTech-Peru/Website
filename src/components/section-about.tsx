import React from 'react'

import { StaticImage } from "gatsby-plugin-image";


const SectionAbout: React.FC = () => {
  return (
    <section className="section section--about" id="about">
            <div className="content content--about">
                <div className="text--content">
                    <h1 className="title">Sé parte de nuestra comunidad</h1>
                    <p>Capacítate junto a otros peruanos apasionados por la tecnología</p>
                </div>
                <div className="about--cards">
                    <article className="card">
                        <div className="card__content">
                            <div className="card__header">
                                <StaticImage className='img'
                                    src="../images/teaching1.png"
                                    alt="Descripción de la imagen"
                                    placeholder="blurred"
                                    />
                            </div>
                            
                            <div className="card__footer">
                                <p>
                                    Buscamos difundir el conocimiento de diversas profesiones en Tecnología. Y para que este proceso sea emocionante, motivante y cooperativo, creamos un espacio en nuestro servidor de Discord para conectar con otros profesionales con los mismos intereses.
                                </p>
                                <a href="https://discord.gg/rgGqrCG7ST" className="btn btn-ghost">
                                    ¡Únete a la comunidad!                                   
                                </a>
                            </div>
                        </div>
                    </article> 
                    <article className="card">
                        <div className="card__content">
                            <div className="card__header">
                                <StaticImage className='img'
                                    src="../images/teaching2.png"
                                    alt="Descripción de la imagen"
                                    placeholder="blurred"
                                    />
                            </div>
                            
                            <div className="card__footer">
                                <p>
                                    En ZonaTech Perú buscamos desarrollar las habilidades de jóvenes peruanos en diversas especialidades de la Tecnología, por ello contamos con diversas iniciativas como talleres, charlas, grupos de estudio, hackathons y programas de entrenamiento.
                                </p>
                                <a href="/eventos" className="btn btn-ghost">
                                    Conocer iniciativas               
                                </a>
                            </div>
                        </div>
                    </article>                  
                </div>
            </div>
        </section>
  )
}

export default SectionAbout