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
                                    Organizamos actividades tanto presenciales como virtuales para que conectes con otros profesionales con los mismos intereses. Estos pueden ser talleres, meetups, hackathons, grupos de estudio.
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
                                    Realizamos programas de entrenamiento para que especialices como Frontend, Backend, Mobile o Analista QA. Estos van desde un entrenamiento teórico / práctico con mentores hasta realizar proyecto de impacto real.
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