import React from 'react';
import Navigation from '../Navigation';
import thumbup from '../../assets/images/thumb.png'
import thumbDown from '../../assets/images/thumbDown.png'
import style from './HeroCard.module.scss';

const HeroCard = () => {
  return(
    <div className={style.heroCard}>
      <div className={style.containerText}>
        <p className={style.subTitle}>Whats your opinion on</p>
        <p className={style.title}>Pope Francis?</p>
        <p className={style.description}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
        <a>More information</a>
        <p>What is your Veredict?</p>
      </div>
      <div className={style.containerThumbs}>
        <div className={`${style.thumbs} ${style.iconContainerUp}`}><img src={thumbup} /></div>
        <div className={`${style.thumbs} ${style.iconContainerDown}`}><img src={thumbDown} /></div>
      </div>
    </div>
  )
}

export default HeroCard;