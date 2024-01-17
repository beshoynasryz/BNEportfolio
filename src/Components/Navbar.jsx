import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {links} from "../data"
import "./Navbar.css"


const Navbar = () => {
   const [showMenu, SetShowMenu] = useState(false);
  return (
    <nav className="nav">
          <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu' }`}>
            <ul className="nav__list">
              {links.map(({name,icon,path},index)=>{
                return(
                  <li className="nav__item" key={index}>
                    <NavLink to ={path} className ={({isActivce}) => isActivce ? 'nav__link active-nav' : 'nav__link'   }
                    onClick={() =>SetShowMenu(!showMenu)}
                    >
                    {icon}
                    <h3 className="nav__name">
                      {name}
                    </h3>
                    </NavLink>

                  </li>
                )
              })}
            </ul>
          </div>
          <div className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle' }`} 
          onClick={()=> SetShowMenu(!showMenu)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

    </nav>
  )
  
};


export default Navbar;