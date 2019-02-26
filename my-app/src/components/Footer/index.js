import React from 'react';
import style from './Footer.module.scss';
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twiter.png'

const Footer = () => {
  return(
    <div className={style.footer}>
      <div>
        <nav className={style.nav}>
          <ul className={style.list}>
            <li>Term and Conditions</li>
            <li>Privacy Policy</li>
            <li>Conctact us</li>
          </ul>
        </nav>
      </div>
      <div className={style.socialNetwork}>
        <ul className={style.list}>
          <li>Follow us</li>
          <li><img src={facebook} alt="facebook"/></li>
          <li><img src={twitter} alt="twitter"/></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;