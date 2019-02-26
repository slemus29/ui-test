import React from 'react';
import wikipediaIcon from '../../assets/images/wikipedia.png';
import thumbup from '../../assets/images/thumb.png'
import thumbDown from '../../assets/images/thumbDown.png'
import style from './HeroCard.module.scss';

const HeroCard = () => {
  return(
    <div className={style.heroCardContainer}>
    <div className={style.heroCard}>
      <div className={style.containerText}>
        <p className={style.subTitle}>Whats your opinion on</p>
        <p className={style.title}>Pope Francis?</p>
        <p className={style.description}>He's talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumb down)  or a true pedophile punishing pontiff? (thumbs up)</p>
        <img src={wikipediaIcon}/>
        <a href="https://www.google.com" className={style.link}>More information</a>
        <p  className={style.opinion}>What is your Veredict?</p>
      </div>
      <div className={style.containerThumbs}>
        <div className={`${style.thumbs} ${style.iconContainerUp}`}><img src={thumbup} /></div>
        <div className={`${style.thumbs} ${style.iconContainerDown}`}><img src={thumbDown} /></div>
      </div>
    </div>
     <div className={style.blur}></div>
     </div>
  )
}

export default HeroCard;