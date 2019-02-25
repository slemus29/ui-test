import React from 'react';
import style from './Sticker.module.scss';

const Sticker = () => {
  return(
    <div className={style.sticker}>
      <div className={style.leftContainer}>
        <h2 >Speak out. Be heard.</h2>
        <h2>Be counted</h2>
      </div>
      <p className={style.description}>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It's easy: You share your opinion, we analyze and put the data in a public report.</p>
      <button className={style.button}>x</button>
    </div>
  )
}

export default Sticker;