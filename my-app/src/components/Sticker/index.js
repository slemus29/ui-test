import React from 'react';
import style from './Sticker.module.scss';
import closeIcon from '../../assets/images/close.png'

const Sticker = () => {
  return(
    <div className={style.sticker}>
      <div className={style.leftContainer}>
        <h2 className={style.title}>Speak out. Be heard.</h2>
        <h2 className={style.subtitle}>Be counted</h2>
      </div>
      <p className={style.description}>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It's easy: You share your opinion, we analyze and put the data in a public report.</p>
      <button className={style.button}><img src={closeIcon}/></button>
    </div>
  )
}

export default Sticker;