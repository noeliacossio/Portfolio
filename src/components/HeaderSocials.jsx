import React from 'react';
import {GrLinkedin} from 'react-icons/gr';
import {ImGithub} from 'react-icons/im';
import {SiLoom} from 'react-icons/si';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href='https://www.linkedin.com/in/noelia-cossio-a46963131/'target="_blank"><GrLinkedin/> </a>
    <a href='https://github.com/noeliacossio'target="_blank"><ImGithub/> </a>
    <a href='https://www.loom.com/looms/videos'target="_blank"><SiLoom/> </a>
    </div>
  )
}

export default HeaderSocials