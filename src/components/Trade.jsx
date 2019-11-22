import React from 'react';
import { Card } from './Card';
import './Trade.css';
import tradeIcon from '../images/Sprite/client_icon_trade.png'
import tradeIconBg from '../images/Sprite/PurchaseButton_256x256.png'

export const Trade = props => {
  let deckCard = props.cards[0];
  let schopCard = props.cards[1];

  return (
    <div className="trade">
      <div className="trade-cards">
        <Card {...deckCard} />
        <div className="trade-icon">
          <img className="trade-icon-icon" src={tradeIcon}/>
          <img className="trade-icon-icon-bg" src={tradeIconBg}/>
        </div>
        <Card {...schopCard} />
      </div>
    </div>
  );
};
