import React from 'react'
import { Card } from './Card';
import './CardPicks.css'

export const CardPicks = (props) => {
  console.log(props);
  return (
    <div className="card-picks">
      <h2>Pick {props.number}</h2>
      <div className="card-picks-cards">
        {props.cards.map((item, i) => (
          <Card key={i} {...item}/>
        ))}
      </div>
    </div>
  )
}