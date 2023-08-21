import React from 'react';

import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g_overlay' />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
         <h1 className='headtext__cormorant'>About Us</h1>
         <img src={images.spoon} alt='about_spoon' className='spoon__img' />
         <p className='p__opensans'>We make food. We also make drinks. Established in 25 B.C </p>
         <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
         <img src={images.knife} alt='about_knife' />
      </div>

      <div className='app__aboutus-content_history'>
         <h1 className='headtext__cormorant'>Our History</h1>
         <img src={images.spoon} alt='about_spoon' className='spoon__img' />
         <p className='p__opensans'>Since we were established before the birth of christ, we've managed to make his last supper. He rated us 5 stars and since then business has been booming.</p>
         <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;