import React from "react"
import { Link } from "gatsby"
import Discord from "../images/svg/discord.svg";

const data = [
  {
    id: 1,
    text: "Nosotros",
    url: "/#about",
  },
  {
    id: 2,
    text: "Eventos",
    url: "/eventos",
  },
  {
    id: 3,
    text: "Blog",
    url: "https://blog.zonatech.org.pe/",
  },
  {
    id: 4,
    text: "Unete a discord",
    url: "https://discord.gg/rgGqrCG7ST",
    Icon: <Discord/>
  },
]

const tempLinks = data.map(link => {
  return (
    <li className="navigation__link" key={link.id}>
        { link.Icon &&
          (<a className="btn btn-solid" href={link.url}>
            {link.Icon}
            {link.text}
          </a>)
        } 
        { !link.Icon &&
          (<Link to={link.url}>{link.text}</Link>)
        }
    </li>
  )
})

export default ({ iconState }) => {
  return (
    <ul className={`${iconState ? `navigation__list none` : `navigation__list`}`}>
      {tempLinks}
    </ul>
  )
}