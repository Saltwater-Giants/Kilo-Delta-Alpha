import React from 'react';
import { deckFromCardCodeList } from '../cards/DeckUtils';
import { Card } from './Card';

export const Deck = props => {
  let deck = deckFromCardCodeList(props.deck);

  return (
    <div>
      {deck.map((item, i) => (
        <Card key={i} {...item}/>
      ))}
    </div>
  )
};