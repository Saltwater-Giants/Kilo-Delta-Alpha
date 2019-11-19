import React from 'react';
import { deckFromCardCodeList } from '../cards/DeckUtils';
import { DeckListCard } from './DeckListCard';
import './Deck.css'

export const Deck = props => {
  let deck = deckFromCardCodeList(props.deck);

  return (
    <div className="deck">
      {deck.map((item, i) => (
        <DeckListCard key={i} {...item}/>
      ))}
    </div>
  )
};