import React from 'react'
import '../styles/portfolio.css'
import Image1 from '../assets/TheMovieDB.jpg'
import Image2 from '../assets/ecommerce.png'
import Image3 from '../assets/Tonic3_RGB.jpg'
import Image4 from '../assets/miTurnoWebApp.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
        <div className="portfolio__item-img">
          <img src={Image1} alt='tmdb'/>
        </div>
        <h3>Portfolio Item: TMDB</h3>
        <div className="portfolio__item-cta">
        <a href='https://github.com/noeliacossio/TMDB' className='btn'>Github</a>
         <a href='https://www.loom.com/share/d68e0f2587ff4655bfb0d39b42f0556a' className='btn btn-primary'>video Demo</a> 
        </div>
        </article>

        <article className='portfolio__item'>
        <div className="portfolio__item-img">
          <img src={Image2} alt='ecommerce'/>
        </div>
        <h3>Portfolio Item: AirCommerce</h3>
        <div className="portfolio__item-cta">
        <a href='https://github.com/noeliacossio/AirCommerce' className='btn'>Github</a>
         <a href='https://www.loom.com/share/59a6e94243bc44a684674aa11814d7b9' className='btn btn-primary'>Video Demo</a>
        </div>
        </article>

        <article className='portfolio__item'>
        <div className="portfolio__item-img">
          <img src={Image3} alt='tonic3'/>
        </div>
        <h3>Portfolio Item: Virtual Events-Tonic3</h3>
        <div className="portfolio__item-cta">
        <a href='https://github.com/noeliacossio/tonic3-api' className='btn'>Github</a>
         <a href='https://www.loom.com/share/a063d7b963fc489d86675fe1ef26efef' className='btn btn-primary'>Video Demo</a> 
        </div>
        </article>

        <article className='portfolio__item'>
        <div className="portfolio__item-img">
          <img src={Image4} alt='MiTurnoWebApp'/>
        </div>
        <h3>Portfolio Item: Mi Turno Web App</h3>
        <div className="portfolio__item-cta">
        <a href='https://github.com/noeliacossio/Mi-Turno-Webapp-Front' className='btn'>Github</a>
         
        </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
