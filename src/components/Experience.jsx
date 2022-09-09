import React from 'react'
import '../styles/experience.css'

import {ImHtmlFive} from 'react-icons/im'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {SiRedux} from 'react-icons/si'
import {SiAngular} from 'react-icons/si'
import {GrNode} from 'react-icons/gr'
import {SiExpress} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import {SiSequelize} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'


const Experience = () => {
  return (
    <section id='experience'>
     <h5>My Programming Skills</h5> 
     <h2>My Experience</h2>
     <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <ImHtmlFive className='experience__details-icon' />
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small> 
            </div>
          </article>
          <article className='experience__details'>
            <SiCss3 className='experience__details-icon' />
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small> 
            </div>
          </article>
          <article className='experience__details'>
            <SiJavascript className='experience__details-icon' />
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small> 
            </div>
          </article>
          <article className='experience__details'>
            <FaReact className='experience__details-icon' />
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small> 
            </div>
          </article>
          <article className='experience__details'>
            <SiRedux className='experience__details-icon' />
            <div>
            <h4>Redux</h4>
            <small className='text-light'>Intermediate</small> 
            </div>
          </article>
          <article className='experience__details'>
            <SiAngular className='experience__details-icon' />
            <div>
            <h4>Angular</h4>
            <small className='text-light'>Intermediate</small> 
            </div>
          </article>

        </div>
      </div>
      <div className="experience__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <GrNode className='experience__details-icon' />
            <div>
            <h4>Node.js</h4>
            <small className='text-light'>Experienced</small> 
            </div>
          </article>
          <article className='experience__details'>
            <SiExpress className='experience__details-icon' />
            <div>
            <h4>Express</h4>
            <small className='text-light'>Experienced</small> 
            </div>
          </article>
          <article className='experience__details'>
            <SiPostgresql className='experience__details-icon' />
            <div>
            <h4>PostgreSQL</h4>
            <small className='text-light'>Experienced</small> 
            </div>
          </article>
          <article className='experience__details'>
            <SiSequelize className='experience__details-icon' />
            <div>
            <h4>Sequelize</h4>
            <small className='text-light'>Experienced</small> 
            </div>
          </article>
          <article className='experience__details'>
            <SiMysql className='experience__details-icon' />
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Intermediate</small> 
            </div>
          </article>
        </div>
      </div>
     </div>
      </section>
  )
}

export default Experience