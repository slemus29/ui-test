import React, { useState } from 'react';
import thumbup from '../../assets/images/thumb.png'
import thumbDown from '../../assets/images/thumbDown.png'
import style from './Card.module.scss';


const containerVote = (borderThumbUp, selectThumbUp, borderThumbDown, selectThumbDown, handleVoteValidated) => {
  return (
    <div className={style.likeContainer}>
      <div className={`${style.iconContainer} ${style.iconContainerUp} ${borderThumbUp}`} onClick={selectThumbUp}>
        <img src={thumbup} className={style.thumbup} />
      </div>
      <div className={`${style.iconContainer} ${style.iconContainerDown}  ${borderThumbDown}`} onClick={selectThumbDown}>
        <img src={thumbDown} className={style.thumbup} />
      </div>
      <button onClick={handleVoteValidated} className={style.button}>Vote now</button>
    </div>
  )
}

const voteAgainComponent = (toggleVote) => {
  return(
    <button className={style.button} onClick={toggleVote}>Vote again</button>
  )
}

const lastVoteThumb = (lastVote, thumbUp, thumbDown) => {
  if(lastVote === 'up'){
    return (<div className={style.iconContainer}><img src={thumbUp} className={style.thumbDown} /></div>)
  } else if(lastVote === 'down'){
    return (<div className={style.iconContainer} style={{"backgroundColor":"orange"}}><img src={thumbDown} className={style.thumbDown} /></div>)
  } else{
    return (<div className={style.iconContainerNone} ><img className={style.thumbDown} /></div>)
  }
}

const Card = ({ data: { image, pullDate, name, category, description, thumbsUp, thumbsDown, lastVote }, handleVote }) => {
  const [thumbSelected, setThumb] = useState("none");
  const selectThumbUp = () => setThumb("up")
  const selectThumbDown = () => setThumb("down")
  const deselectThumbs = () => setThumb("none")
  const [alreadyVote, setAlreadyVote] = useState(false);
  const toggleVote = () => setAlreadyVote(!alreadyVote);

  const thumbsUpPercentage = Math.round(thumbsUp / (thumbsDown + thumbsUp) * 100);
  const thumbsDownPercentage = Math.round(thumbsDown / (thumbsDown + thumbsUp) * 100);
  const thumbsUpPercentageBar = thumbsUpPercentage > 16 ? thumbsUpPercentage : 18;
  const thumbsDownPercentageBar = thumbsDownPercentage >16 ? thumbsDownPercentage : 18;
  const totalThumbsUp = { "width": `${thumbsUpPercentageBar}%` }
  const totalThumbsDown = { "width": `${thumbsDownPercentageBar}%` }
  const borderThumbUp = thumbSelected === 'up' ? style.borderFocus : '';
  const borderThumbDown = thumbSelected === 'down' ? style.borderFocus : '';

  const handleVoteValidated = () => {
    if (thumbSelected !== 'none') {
      handleVote(thumbSelected);
      deselectThumbs();
      toggleVote()
    }
  }

  const votingComponent = !alreadyVote ? containerVote(borderThumbUp, selectThumbUp, borderThumbDown, selectThumbDown, handleVoteValidated)
                                      : voteAgainComponent(toggleVote);

  const currentThumb = lastVoteThumb(lastVote, thumbup, thumbDown)
  const toggleDescritpion = !alreadyVote ? description : 'Thanks you for voting!'

  return (
    <div className={style.card}>
      <img src={image} className={style.image} alt="personImg"/>
      <div className={style.containerDescription}>
        {currentThumb}
        <div>
          <h3 className={style.title}>{name}</h3>
          <p className={style.pullDate}><span className={style.time}>{pullDate}</span>{` in ${category}`}</p>
          <p>{toggleDescritpion}</p>
            {votingComponent}
        </div>
      </div>
      <div className={style.progressBar}>
        <div className={style.like} style={totalThumbsUp}><img src={thumbup} className={style.thumbup} />{thumbsUpPercentage}%</div>
        <div className={style.dislike} style={totalThumbsDown}>{thumbsDownPercentage}%<img src={thumbDown} className={style.thumbup} /></div>
      </div>
    </div>
  )
}

export default Card;