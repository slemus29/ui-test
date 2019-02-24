import React from 'react';
import style from './Navigation.module.scss'

const Navigation = () => {
  return(
    <nav className={style.nav}>
      <ul className={style.list}>
        <li>Past Trials</li>
        <li>How It Works</li>
        <li>Log In / Sign Up</li>
      </ul>
    </nav>
  )
}

export default Navigation;