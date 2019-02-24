import React from 'react';
import thumbup from '../../assets/images/thumb.png'
import thumbDown from '../../assets/images/thumbDown.png'
import style from './Card.module.scss';


const Card = ({data:{image, name, catergory, description, thumbsUp, thumbsDown}, handleThumbsUp}) => {
  const totalThumbsUp = {"width":`${thumbsUp}%`}
  const totalThumbsDown = {"width":`${thumbsDown}%`}
  return(
    <div className={style.card}>
      <img src={image} className={style.image}/>
      <div className={style.containerDescription}>
        <div className={style.iconContainer}><img src={thumbDown} className={style.thumbDown} /></div>
        <div>
            <h3 className={style.title}>{name}</h3>
          <p>{catergory}</p>
          <p>{description}</p>
          <div className={style.likeContainer}>
            <div className={`${style.iconContainer} ${style.iconContainerUp}`} onClick={handleThumbsUp}>
              <img src={thumbup} className={style.thumbup}/>
            </div>
            <div className={`${style.iconContainer} ${style.iconContainerDown}`}>
              <img src={thumbDown} className={style.thumbup} />
            </div>
            <button onClick={handleThumbsUp} className={style.button}>Vote now</button>
          </div>
        </div>
      </div>
      <div className={style.progressBar}>
        <div className={style.like} style={totalThumbsUp}><img src={thumbup} className={style.thumbup}/>{thumbsUp}%</div>
        <div className={style.dislike} style={totalThumbsDown}>{thumbsDown}%<img src={thumbDown} className={style.thumbup} /></div>
      </div>
    </div>
  )
}

export default Card;