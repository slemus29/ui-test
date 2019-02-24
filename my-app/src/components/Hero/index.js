import React from 'react';
import Navigation from '../Navigation';
import HeroCard from '../HeroCard';
import style from './Hero.module.scss';
import LiveSpan from '../LiveSpan';

const Hero = () => {
  return(
    <div className={style.hero}>
      <h1>Rule of Thumb</h1>
      <Navigation />
      <HeroCard />
      <LiveSpan />
    </div>
  )
}

export default Hero;