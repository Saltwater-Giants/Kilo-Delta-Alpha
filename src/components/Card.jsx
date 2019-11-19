import React from 'react';
import './Card.css';
import cardScoreImg from '../images/Sprite/ActionLog_Backplate.png';

export const Card = (props) => {
  if (props === undefined || props.info === undefined) return null;

  var context = require.context('../ext/datadragon-set1-lite/en_us/img/cards/', true, /\.(png)$/);

  if (props.info.cardCode !== undefined) {
    return (
      <div className="card">
        <img src={context('./' + props.info.cardCode + '.png')} className="card-image" />
        <div className="card-score">
          <img src={cardScoreImg} className="card-score-image" />
          <span className="card-score-number">{props.score}</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        {props.info.name}
      </div>
    </>
  )
}