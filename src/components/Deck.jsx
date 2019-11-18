import React from 'react';
import { deckFromCardCodeList } from '../cards/DeckUtils';
import { DeckListCard } from './DeckListCard';

export const Deck = props => {
  let deck = deckFromCardCodeList(props.deck);

  return (
    <div>
      {deck.map((item, i) => (
        <DeckListCard key={i} {...item}/>
      ))}
    </div>
  )
};