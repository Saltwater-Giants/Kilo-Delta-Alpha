import React from 'react';
import './DeckListCard.css';
import ChampCard from '../images/ChampionDeckList.png'
import CreatureCard from '../images/CreatureDeckList.png'
import SpellCard from '../images/SpellDeckList.png'

export const DeckListCard = (props) => {
  if (props === undefined || props.card.info === undefined) return null;
  let deckListImage = CreatureCard;
  switch (props.card.info.type) {
    case 'Spell':
      deckListImage = SpellCard;
      break;
    case 'unit':
      if (props.card.info.supertype === 'Champion') {
        deckListImage = ChampCard;
      }
  }

  let cardName = props.card.info.name;
  if (props.card.info.name.length > 16 ){
    cardName = props.card.info.name.substr(0,15) + '...'
  }

  const costCentering = props.card.info.cost > 9 ? 7 : 13;

  if (props.card.info.cardCode !== undefined) {
    return (
      <div className="deck-list-card">
        <img src={deckListImage} className="deck-list-card-image" />
        <span className="deck-list-card-cost" style={{ left: `${costCentering}px`}}>{props.card.info.cost}</span>
        <span className="deck-list-card-name">{cardName}</span>
        <span className="deck-list-card-number">{props.count}</span>
      </div>
    );
  }

  return (
    <>
      <div>
        {props.card.info.name}
      </div>
    </>
  )
};