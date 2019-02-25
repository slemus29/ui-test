import React from 'react';
import search from '../../assets/images/search.png'
import style from './Navigation.module.scss'

const Navigation = () => {
  return(
    <nav className={style.nav}>
      <ul className={style.list}>
        <li>Past Trials</li>
        <li>How It Works</li>
        <li>Log In / Sign Up</li>
        <li><img src={search} className={style.search} /></li>
      </ul>
    </nav>
  )
}

export default Navigation;