import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import style from './CardGrid.module.scss';
import Card from '../Card';
import { fetchPolls, pollData, isFetching, updateThumb } from '../../reducers/polls'

class CardGrid extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentSelection: '',
    }
    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount(){
    this.props.fetchPolls();
  }
  
  handleVote (index) {
    return (thumb)=> {
      this.props.updateThumb(index, thumb)
    } 
  }

  render(){
    const {polls} = this.props;
    console.log("current thumb", this.state)
    const totalCards = polls.map((item, index) => {
      return(
        <Card data={item} key={index} handleVote={this.handleVote(index)} />
      )
    })
    return(
      <section className={style.grid}>{totalCards}</section>
    )
  }
}

const mapStateToProps = (state) => ({
  polls: pollData(state),
  isFetching: isFetching(state)
});

const actionMakers = {
  fetchPolls,
  updateThumb
}

export default connect(mapStateToProps, actionMakers)(CardGrid);