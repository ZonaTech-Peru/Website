import React, { useState } from 'react'
import { Link } from 'gatsby';

//SVG
import Logo from "../images/svg/logo.svg";
import Discord from "../images/svg/discord.svg";



interface propsHeader{
    shape?:boolean;
    background?:boolean;
}


export const Header: React.FC<propsHeader>  = ({shape = false, background= false}) => {

    const [iconState, setIconState]= useState<boolean>(true) 


  return (
    <header>
            <nav className={background? `navigation standar`: `navigation`}>
                {
                    shape ? <div className="shape"></div>: ""
                }
                <Link className="navigation-logo" to="/">
                    {/* <img classNameName="object-contain h-full" src="../images/svg/logo.svg" alt=""/> */}
                    <Logo className="object-contain h-full"/>
                </Link>
                <ul className={iconState ?`navigation__list none`:`navigation__list`} >
                    <li>
                        <Link className="navigation__link" to="/nosotros">
                            Nosotros
                        </Link>
                    </li>
                    <li>
                        <Link className="navigation__link" to="/eventos">
                            Eventos
                        </Link>
                    </li>
                    <li>
                        <a className="btn btn-solid" href="#">
                            <Discord/>
                            Unete a discord
                        </a>
                    </li>
                </ul>
                <div className={iconState?`menu-icon`:`menu-icon active`} onClick={()=>{setIconState(!iconState) }} >
                    <div className="bar-icon"></div>
                    <div className="bar-icon"></div>
                    <div className="bar-icon"></div>      
                </div>
            </nav>
        </header>
  )
}

export default Header