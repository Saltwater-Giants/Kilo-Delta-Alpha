import React from 'react';
import { Trade } from './Trade';
import './CardTrades.css'

export const CardTrades = props => {

  return (
    <div className="card-trades">
      <div className="card-trades-trades">
        {props.trades.map((item, i) => (
          <Trade key={i} cards={item}/>
        ))}
      </div>
    </div>
  )
};