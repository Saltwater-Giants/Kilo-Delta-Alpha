import React from 'react';
import './DeckListCard.css';
import ChampCard from '../images/ChampionDeckList.png'
import CreatureCard from '../images/CreatureDeckList.png'
import SpellCard from '../images/SpellDeckList.png'

export const DeckListCard = (props) => {
  if (props === undefined || props.info === undefined) return null;
  let deckListImage = CreatureCard;
  switch (props.info.type) {
    case 'Spell':
      deckListImage = SpellCard;
      break;
    case 'unit':
      if (props.info.supertype === 'Champion') {
        deckListImage = ChampCard;
      }
  }

  if (props.info.cardCode !== undefined) {
    return (
      <div className="deck-list-card">
        <img src={deckListImage} className="deck-list-card-image" />
        <span className="deck-list-card-cost">{props.info.cost}</span>
        <span className="deck-list-card-name">{props.info.name}</span>
        <span className="deck-list-card-number">1</span>
      </div>
    );
  }

  return (
    <>
      <div>
        {props.info.name}
      </div>
    </>
  )
};