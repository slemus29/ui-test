import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
  return(
    <div>
      <div>
        <nav className={style.nav}>
          <ul className={style.list}>
            <li>Term and Conditions</li>
            <li>Privacy Policy</li>
            <li>Conctact us</li>
          </ul>
        </nav>
      </div>
      <div>
        <ul className={style.list}>
          <li>Follow us</li>
          <li>FaceBook</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;