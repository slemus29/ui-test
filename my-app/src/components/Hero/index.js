import React from 'react';
import Navigation from '../Navigation';
import HeroCard from '../HeroCard';
import style from './Hero.module.scss';
import LiveSpan from '../LiveSpan';

const Hero = () => {
  return(
    <div className={style.hero}>
      <div className={style.container}>
        <div className={style.header}>
          <h1 className={style.title}>Rule of Thumb.</h1>
          <Navigation />
        </div>
        <HeroCard />
        <LiveSpan />
      </div>
    </div>
  )
}

export default Hero;