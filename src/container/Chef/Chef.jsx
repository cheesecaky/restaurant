import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
   <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
         <img src={images.chef} alt='chef' />
      </div>

      <div className='app__wrapper_info'>
         <SubHeading title="Chef's Word" />
         <h1 className='headtext__cormorant'>What we believe in</h1>

         <div className='app__chef-content'>
            <div className='app__chef-content_quote'>
               <img src={images.quote} alt='quote' />
               <p className='p__opensans'>We believe Audi is better than BMW.</p>
            </div>
            <p className='p__opensans'>If you arrive to our restaurant in a bimmer, we'll kindly ask you to leave. We have enough oil in the kitchen... We don't need yours all over our parking area</p>
         </div>

         <div className='app__chef-sign'>
            <p>Sum Ting Wong</p>
            <p className='p__opensans'>Chef & Founder</p>
            <img src={images.sign} alt='sign' />
         </div>
      </div>
   </div>
);

export default Chef;
