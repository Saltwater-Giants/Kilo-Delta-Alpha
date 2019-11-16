import React from 'react'
import { Card } from './Card';

export const CardPicks = (props) => {
  console.log(props);
  return (
    <>
      <h2>Pick {props.number}</h2>
      <div>
        {props.cards.map((item, i) => (
          <Card key={i} {...item}/>
        ))}
      </div>
    </>
  )
}