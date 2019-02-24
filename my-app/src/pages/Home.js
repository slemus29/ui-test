import React, { Component } from 'react';
import Hero from '../components/Hero';
import Sticker from '../components/Sticker';
import CardGrid from '../components/CardGrid';
import NameProposalSticker from '../components/NameProposalSticker';
import Footer from '../components/Footer';

class Home extends Component {
  render(){
    return(
      <div>
        <Hero />
        <Sticker />
        <CardGrid />
        <NameProposalSticker />
        <Footer />
      </div>
    );

  }
}

export default Home