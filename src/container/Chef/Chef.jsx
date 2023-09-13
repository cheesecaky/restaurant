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
               <p className='p__opensans'>We believe in Good Food.</p>
            </div>
            <p className='p__opensans'>Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.</p>
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
