import React from 'react'
import CTA from './CTA'
import Me from '../assets/me.png'
import HeaderSocials from './HeaderSocials'
import '../styles/header.css'

const Header = () => {
  return (
    <header>
     <div className="container header__container">
      <h4>Hello I'm</h4>
      <h1>Noelia Cossio</h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <CTA />
     <div className="me">
      <img src={Me} alt='me'/>
     </div>
      <HeaderSocials/>
     </div>
    </header>
  )
}

export default Header