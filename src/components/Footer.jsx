import React from 'react'
import '../styles/footer.css'
import {GrInstagram} from 'react-icons/gr'
import {FaFacebookSquare} from 'react-icons/fa'
import {SiLoom} from 'react-icons/si'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>NoCo's Portfolio</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About Me</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.instagram.com/'><GrInstagram/> </a>
        <a href='https://www.facebook.com/'><FaFacebookSquare/></a>
        <a href='https://www.loom.com/looms/videos'><SiLoom/></a>

      </div>

      <div className="footer__copyright">
        <small>&copy; My Portfolio. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer