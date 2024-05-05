import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import CalendarIcon from '../images/svg/calender.svg';
import ClockIcon from '../images/svg/clock.svg';
import ArrowRightIcon from '../images/svg/arrow-right.svg';

interface SectionEventsProps {
  queryType: 'all' | 'byDate';
  date?: string;
}

interface Event {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string; };
  link: string;
  content: { rendered: string; };
  tipo_de_evento: { id: number; name: string; }[];
}

const SectionEvents: React.FC<SectionEventsProps> = ({ queryType, date }) => {
  const [eventTypes, setEventTypes] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchEventTypes = async () => {
      const response = await fetch('https://blog.zonatech.org.pe/wp-json/wp/v2/tipo-de-evento');
      const data = await response.json();
      setEventTypes(data);
    };

    const fetchEvents = async () => {
      try {
        const rest = "https://blog.zonatech.org.pe/wp-json/wp/v2/zonatech_evento";
        let apiUrl = queryType === 'all' ? `${rest}?order=desc` : `${rest}?filter_day=${date}`;
        if (queryType === 'byDate' && !date) throw new Error('Fecha requerida para la consulta por fecha.');

        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        
        setEvents(data);
      } catch (error) {
        console.error('Error al obtener eventos:', error);
      }
    };

    fetchEventTypes();
    fetchEvents();
  }, [queryType, date]);

  const groupedEvents = eventTypes.map(type => ({
    ...type,
    events: events.filter(event => event['tipo-de-evento'] && event['tipo-de-evento'].some(t => t.id === type.id))
  }));

  return (
    <section className="section section--events">
      <div className="content-section content--events">
        <div className="text--content">
          <h1 className="title">Próximos eventos</h1>
          <p>Conecta y comparte con la comunidad</p>
        </div>
        <div className="events--cards">
          {groupedEvents.map((type) => (
            type.events.length > 0 ? type.events.map(event => (
              <article key={event.id} className="card">
                <div className="card__content">
                  <div className="card__header">
                    <h2 className="title">{event['tipo-de-evento'][0]?.name || 'Tipo de Evento Desconocido'}</h2>
                    <StaticImage
                      className="img"
                      src="../images/charla1.png"
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
            )) : (
              <article key={type.id} className="card">
                <div className="card__content">
                  <div className="card__header">
                    <h2 className="title">{type.name}</h2>                    
                  </div>
                  <div className="card__body">
                    <p>Actualmente no hay eventos para este tipo.</p>
                  </div>
                </div>
              </article>
            )
          ))}
        </div>
        {queryType !== "all" && <a className="btn btn-solid" href="/eventos">Ver todos</a>}
      </div>
    </section>
  );
};

export default SectionEvents;
