import React from 'react';
import { SubHeading } from '../../components';

import images from '../../constants/images'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading
         title="Chase the new flavour"
      />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}>The key is to enjoy our fucking food and tip 200%. How we gonna make that bread if you broke niggas always complaining about the price. Get your broke ass off that iPhone 5 and make some money.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img' />
    </div>
  </div>
);

export default Header;
