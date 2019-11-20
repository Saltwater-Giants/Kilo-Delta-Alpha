import React from 'react'
import win from '../images/Sprite/Limited_Complete.png'
import incomplete from '../images/Sprite/Limited_Locked.png'
import './LimitedMainTrack.css'

export const LimitedMainTrack = props => {
  let iconImage = props.isWon ? win : incomplete;
  return(
    <div className="limited-main-track">
      <img className="limited-main-track-image" src={iconImage} />
    </div>
  )
};
