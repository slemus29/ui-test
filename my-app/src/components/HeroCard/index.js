import React from 'react';
import Navigation from '../Navigation';
import thumbup from '../../assets/images/thumb.png'
import thumbDown from '../../assets/images/thumbDown.png'
import style from './HeroCard.module.scss';

const HeroCard = () => {
  return(
    <div className={style.hero}>
      <p>Whats your opinion on</p>
      <p>Pope Francis?</p>
      <p>lorem</p>
      <a></a>
      <p>What is your Veredict?</p>
      <div>
        <div><img src={thumbup}/></div>
        <div><img src={thumbDown} /></div>
      </div>
    </div>
  )
}

export default HeroCard;