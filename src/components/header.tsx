import React, { useState } from 'react'
import { Link } from 'gatsby';
import Navigation from "../components/navigation"

//SVG
import Logo from "../images/svg/logo.svg";

interface propsHeader{
    shape?:boolean;
    background?:boolean;
}

export const Header: React.FC<propsHeader>  = ({shape = false, background= false}) => {

    const [iconState, setIconState]= useState<boolean>(true) 

  return (
    <header>
                {
                    shape ? <div className="shape"></div> : "" 
                }
            <nav className={background? `navigation standar`: `navigation`}>
               
                <Link className="navigation-logo" to="/">
                    <Logo className="object-contain h-full w-56"/>
                </Link>
                <Navigation iconState={iconState}></Navigation>
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