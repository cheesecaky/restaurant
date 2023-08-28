import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';
import images from '../../constants/images';

const Footer = () => (
   <div className='app__footer section__padding'>
      <Newsletter />
      <FooterOverlay />

      <div className='app__footer-links'>
         <div className='app__footer-links_contact'>
            <h1 className='app__footer-headtext'>Contact Us</h1>
            <p className='p__opensans'>Suck My Dick Lane, London GA69 SE4</p>
            <p className='p__opensans'>+447975777666</p>
            <p className='p__opensans'>+447975555666</p>
         </div>
         <div className='app__footer-links_logo'>
            <img src={images.gericht} alt='footer_logo' />
            <p className='p__opensans'>"The best way to find yourself is to blow up a couple BMWs"</p>
            <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop: 15}} />
            <div className='app__footer-links_icons'>
               <FiFacebook />
               <FiTwitter />
               <FiInstagram />
            </div>
         </div>
         <div className='app__footer-links_work'>
            <h1 className='app__footer-headtext'>Working Hours</h1>
            <p className='p__opensans'>Monday-Friday:</p>
            <p className='p__opensans'>10:00 am - 02:00 am</p>
            <p className='p__opensans'>Saturday-Sunday:</p>
            <p className='p__opensans'>10:00 am - 03:00 am</p>
         </div>
      </div>
      <div className='footer__copyright'>
         <p className='p__opensans'>2023 Gericht. All Rights Reserved.</p>
      </div>
   </div>
);

export default Footer;
