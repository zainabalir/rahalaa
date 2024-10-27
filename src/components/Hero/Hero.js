import React from 'react';
import './hero.css';
import Button from '../Button/Button';
import imageuu from './backimg.png'; // تأكد من استيراد الصورة بشكل صحيح
import Searchbar from '../Service/Searchbar';

const HeroSection = () => {
  return (
    <div className='container-hero'>
      <div className='container-exploremore'>
        <div className='containerlink'>
          <h1 className='herodis'>Discover Iraq’s rich history and culture</h1>
          <Button label="Explore more" width='170px' height='50px'  className="button-he" fontSize='2rem'/>

          </div>
        <div className='container-image'>
          <img src={imageuu} alt='Hero' />
        </div>
      </div>
      <Searchbar />
    </div>
  );
};

export default HeroSection;
