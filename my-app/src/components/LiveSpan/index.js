import React from 'react';
import style from './LiveSpan.module.scss';

const LiveSpan = () => {
  return(
    <div className={style.liveSpan}>
      <div className={style.closing}>Clossing in</div>
      <div className={style.arrow}></div>
      <div className={style.days}>22 Days</div>
    </div>
  )
}

export default LiveSpan;