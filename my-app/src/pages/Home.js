import React, { Component } from 'react';
import Hero from '../components/Hero';
import Sticker from '../components/Sticker';
import CardGrid from '../components/CardGrid';
import NameProposalSticker from '../components/NameProposalSticker';
import Footer from '../components/Footer';
import style from './Home.module.scss'

class Home extends Component {
  render(){
    return(
      <div>
        <Hero />
        <div className={style.content}>
          <Sticker />
          <h3 className={style.votes}>Votes</h3>
          <CardGrid />
          <NameProposalSticker />
          <Footer />
        </div>
       
      </div>
    );

  }
}

export default Home