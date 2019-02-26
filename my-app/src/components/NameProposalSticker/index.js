import React from 'react';
import style from './NameProposalSticker.module.scss';

const NameProposalSticker = () => {
  return(
    <div className={style.proposal}>
      <p className={style.text}>Is there anyone else you would want us to add?</p>
      <button class={style.button}>Submit a Name</button>
    </div>
  )
}

export default NameProposalSticker;