import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import style from './CardGrid.module.scss';
import Card from '../Card';
import { fetchPolls, pollData, isFetching } from '../../reducers/polls'

class CardGrid extends Component {
  constructor(props){
    super(props);
    this.handleThumbsUp = this.handleThumbsUp.bind(this);
  }

  componentDidMount(){
    this.props.fetchPolls();
  }
  
  handleThumbsUp (index) {
    return ()=> {
      console.log("redux", index)
    } 
  }

  render(){
    const {polls} = this.props;
    const totalCards = polls.map((item, index) => {
      return(
        <Card data={item} key={index} handleThumbsUp={this.handleThumbsUp(index)}/>
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
  fetchPolls
}

export default connect(mapStateToProps, actionMakers)(CardGrid);