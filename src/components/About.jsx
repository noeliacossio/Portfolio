import React from 'react'
import "../styles/about.css"
import Me2 from '../assets/me2.png'
import {FaAward} from 'react-icons/fa'
import {ImUserTie} from 'react-icons/im'
import {MdOutlineFolderShared} from 'react-icons/md'

const About = () => {
  return (
    
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me2} alt='me2' />
          </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
             <article className='about__card'> 
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> +800hs (4 months) Working </small>
             </article>

             <article className='about__card'> 
              <ImUserTie className='about__icon'/>
              <h5>Clients</h5>
              <small> I had the pleasure to work with the team of tonic3 </small>
             </article>

             <article className='about__card'> 
              <MdOutlineFolderShared className='about__icon'/>
              <h5>Projects</h5>
              <small> +6 Completed Projects</small>
             </article>
          </div>
 
          <p> I was intrigued by programming so I started an itroductory course on Plataforma 5 and I becomed passionate about it, soon enough, I started a Coding Bootcamp, which was one of the most challenging things I have ever done in my life. Now, I can say that I'm happy for having achieved one of the most important goals in my life! I graduated as a Full-Stack Developer after 4 intensive months, more than 800 hours of sacrifice that was totally worth it.</p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  
  )
}

export default About