import React, { useState, useEffect } from 'react';
import CalendarIcon from '../images/svg/calender.svg';
import ClockIcon from '../images/svg/clock.svg';
import ArrowRightIcon from '../images/svg/arrow-right.svg';

interface SectionEventsProps {
  queryType: 'all' | 'byDate';
  date?: string;
}

const SectionEvents: React.FC<SectionEventsProps> = ({ queryType, date }) => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        let apiUrl = "https://blog.zonatech.org.pe/wp-json/wp/v2/zonatech_evento";
        if (queryType === 'byDate' && !date) throw new Error('Fecha requerida para la consulta por fecha.');
        if (queryType === 'byDate') apiUrl += `?filter_day=${date}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const dataOrdered = data.sort((a, b) => new Date(b.acf.inicio) - new Date(a.acf.inicio));
        setEvents(dataOrdered);
      } catch (error) {
        console.error('Error al obtener eventos:', error);
      }
    };

    fetchEvents();
  }, [queryType, date]);

  const placeholderUrl = 'https://placehold.co/1200x720';

  return (
    <section className="section section--events">
      <div className="content-section content--events">
        <div className="text--content">
          <h1 className="title">Próximos eventos</h1>
          <p>Conecta y comparte con la comunidad</p>
        </div>
        <div className="events--cards">
          {events.length > 0
            ? events.map(event => (
              <article key={event.id} className="card">
                <div className="card__content">
                  <div className="card__header">
                    <h2 className="title">{event['tipo-de-evento'][0]?.name || 'Tipo de Evento Desconocido'}</h2>
                    <img
                      className="img"
                      src={event['imagen_destacada_url'] ? event['imagen_destacada_url'] : placeholderUrl}

                      alt="Event Image"
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
                        {new Date(event.acf.inicio.replace(" ", "T")).toLocaleDateString('es-PE', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </li>
                      <li className="list-item">
                        <ClockIcon />
                        {new Date(event.acf.inicio).toLocaleTimeString('es-PE', {
                          hour: 'numeric',
                          minute: 'numeric',
                          timeZone: 'America/Lima'
                        })}
                      </li>
                    </ul>
                    <a href={event.acf.url_de_stream} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                      Ver evento
                      <ArrowRightIcon />
                    </a>
                  </div>
                </div>
              </article>
            ))
            : (
              <article className="card">
                <div className="card__content">
                  <div className="card__body">
                    <p className='text-center'>Actualmente no hay próximos eventos.</p>
                  </div>
                </div>
              </article>
            )
          }
        </div>
        {queryType !== "all" && <a className="btn btn-solid" href="/eventos">Ver todos</a>}
      </div>
    </section>
  );
};

export default SectionEvents;
