import React from 'react';
import { Card } from './Card';
import './CardPicks.css';
import CardPick from '../cards/CardPick';
import picksScoreImg from '../images/Sprite/FactionNameplate.png';

export const CardPicks = (props) => {
  if (props === undefined || props.cards === undefined) return null;

  let cardPick = new CardPick(props.cards);
  let centeringLeft = cardPick.score > 9 ? 33 : 43;

  return (
    <div className="card-picks">
      <div className="card-picks-score">
        <img src={picksScoreImg} className="card-picks-score-image" />
        <span className="card-picks-score-number" style={{left: `${centeringLeft}px`}}>{cardPick.score}</span>
      </div>
      <div className="card-picks-cards">
        {cardPick.cards.map((item, i) => (
          <Card key={i} {...item}/>
        ))}
      </div>
    </div>
  )
};