import React from 'react';
import '../styles/navbar.css';
import {TiHomeOutline} from 'react-icons/ti';
import {TiBusinessCard} from 'react-icons/ti';
import {BsPatchCheck} from 'react-icons/bs';
import {TiFolder} from 'react-icons/ti';
import {TiMessages} from 'react-icons/ti';
import { useState } from 'react';

const NavBar = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
   <nav>
    <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <TiHomeOutline/> </a>
    <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <TiBusinessCard/> </a>
    <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BsPatchCheck/> </a>
    <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> <TiFolder/> </a>
    <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <TiMessages/> </a>
   </nav>
  )
}

export default NavBar