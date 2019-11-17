import React from 'react'
import { Card } from './Card';
import './CardPicks.css'
import CardPick from '../cards/CardPick';

export const CardPicks = (props) => {
  let cardPick = new CardPick(props.cards);

  return (
    <div className="card-picks">
      <h2>Pick {props.number + 1}: {cardPick.score}</h2>
      <div className="card-picks-cards">
        {cardPick.cards.map((item, i) => (
          <Card key={i} {...item}/>
        ))}
      </div>
    </div>
  )
}