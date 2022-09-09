import React from 'react'
import CV from '../assets/CV_Noelia Cossio.pdf'
import '../index.css';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download my CV</a>
        <a href='#contact' className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default CTA