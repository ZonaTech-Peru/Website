import React from 'react'
import { StaticImage } from "gatsby-plugin-image";

//Icons
import CalendarIcon from "../images/svg/calender.svg";
import ClockIcon from "../images/svg/clock.svg";
import ArrowRightIcon from "../images/svg/arrow-right.svg";

const SectionEvents: React.FC = () => {
  return (
    <section className="section section--events" id="events">
            <div className="content content--events">
                <div className="text--content">
                    <h1 className="title">Próximos eventos</h1>
                    <p>Conecta y comparte con la comunidad en</p>
                </div>
                <div className="events--cards">
                    <article className="card">
                        <div className="card__content">
                            <div className="card__header">
                                <h2 className="title">Taller</h2>
                                <StaticImage className='img'
                                    src="../images/taller1.png"
                                    alt="Descripción de la imagen"
                                    placeholder="blurred"
                                    />
                            </div>
                            <div className="card__body">
                                <p>Introducción a Tailwind</p>
                            </div>
                            <div className="card__footer">
                                <ul className="list">
                                    <li className="list-item">
                                        <CalendarIcon/>
                                        Domingo 05 de Febrero
                                    </li>
                                    <li className="list-item">
                                        <ClockIcon/>
                                        18:00 (GMT-5)
                                    </li>
                                </ul>
                                <a href="#" className="btn btn-ghost">
                                    Ver taller
                                    <ArrowRightIcon/>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article className="card">
                        <div className="card__content">
                            <div className="card__header">
                                <h2 className="title">Charla</h2>
                                <StaticImage className='img'
                                    src="../images/charla1.png"
                                    alt="Descripción de la imagen"
                                    placeholder="blurred"
                                    />
                            </div>
                            <div className="card__body">
                                <p>Cómo iniciar como desarrollador .NET</p>
                            </div>
                            <div className="card__footer">
                                <ul className="list">
                                    <li className="list-item">
                                        <CalendarIcon/>
                                        Domingo 05 de Febrero
                                    </li>
                                    <li className="list-item">
                                        <ClockIcon/>
                                        18:00 (GMT-5)
                                    </li>
                                </ul>
                                <a href="#" className="btn btn-ghost">
                                    Ver charla
                                    <ArrowRightIcon/>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article className="card">
                        <div className="card__content">
                            <div className="card__header">
                                <h2 className="title">Grupo de estudio</h2>
                            </div>
                            <div className="card__body">
                                <p className="card__info">Actualmente no hay grupos de estudio activos.</p>
                            </div>
                          
                        </div>
                    </article>                   
                </div>
            </div>
        </section>
  )
}

export default SectionEvents