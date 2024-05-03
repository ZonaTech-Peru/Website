import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import CalendarIcon from '../images/svg/calender.svg';
import ClockIcon from '../images/svg/clock.svg';
import ArrowRightIcon from '../images/svg/arrow-right.svg';

interface SectionEventsProps {
  queryType: 'all' | 'byDate';
  date?: string; // Necesario si queryType es 'byDate' and format 'YY/MM/DD'
}
interface Event {
    id: number;
    date: string;
    slug: string;
    title: {
      rendered: string; // Título renderizado
    };
    link: string;
    content: {
      rendered: string; // Contenido renderizado (puede estar vacío)
    };
    'tipo-de-evento': {
      id: number;
      name: string;
    }[];
  }

const SectionEvents: React.FC= ({ queryType, date }: SectionEventsProps) => {
    const [events, setEvents] = useState<any[]>([]);
  
    useEffect(() => {
      const fetchEvents = async () => {
        try {
            const rest = "https://blog.zonatech.org.pe/wp-json/wp/v2/zonatech_evento";
          let apiUrl = '';
  
          if (queryType === 'all') {
            // Consulta todos los eventos
            apiUrl = `${rest}?order=desc`;
          } else if (queryType === 'byDate' && date) {
            // Consulta eventos por fecha específica
            apiUrl = `${rest}?filter_day=${date}`;
          } else {
            throw new Error('Tipo de consulta no válido.');
          }
  
          const response = await fetch(apiUrl);
          const data = await response.json();
          setEvents(data);
        } catch (error) {
          console.error('Error al obtener eventos:', error);
        }
      };
  
      fetchEvents();
    }, [queryType, date]);
  
    return (
      <section className="section section--events">
        <div className="content content--events">
          <div className="text--content">
            <h1 className="title">Próximos eventos</h1>
            <p>Conecta y comparte con la comunidad</p>
          </div>
          <div className="events--cards">
            {events.length === 0 
            ? (<p>No hay eventos próximos.</p>)
            : (events.map((event: any) => (
              <article key={event.id} className="card">
                <div className="card__content">
                  <div className="card__header">
                    
                  <h2 className="title">  {event['tipo-de-evento'] && event['tipo-de-evento'][0]?.name || 'Tipo de Evento Desconocido'}</h2>
                    <StaticImage
                      className="img"
                      src="../images/charla1.png"
                      alt="Descripción de la imagen"
                      placeholder="blurred"
                    />
                  </div>
                  <div className="card__body">
                    <p>{event.title.rendered}</p>
                  </div>
                  <div className="card__footer">
                    <ul className="list">
                      <li className="list-item">
                        <CalendarIcon />
                        {new Date(event.date).toLocaleDateString('es-PE', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </li>
                      <li className="list-item">
                        <ClockIcon />
                        {new Date(event.date).toLocaleTimeString('es-PE', {
                          hour: 'numeric',
                          minute: 'numeric',
                          timeZoneName: 'short',
                        })}
                      </li>
                    </ul>
                    <a href={event.link} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                      Ver evento
                      <ArrowRightIcon />
                    </a>
                  </div>
                </div>
              </article>
            )))}
          </div>
          {queryType !== "all" && <a className="btn btn-solid" href="/eventos">Ver todos</a>}
        </div>
      </section>
    );
  };
  
  export default SectionEvents;