import React from 'react'
import { Card } from './Card';
import './CardPicks.css'

export const CardPicks = (props) => {
  return (
    <div className="card-picks">
      <h2>Pick {props.number + 1}</h2>
      <div className="card-picks-cards">
        {props.cards.map((item, i) => (
          <Card key={i} {...item}/>
        ))}
      </div>
    </div>
  )
}