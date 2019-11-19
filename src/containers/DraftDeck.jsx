import React from 'react';
import './DraftDeck.css'
import { Deck } from '../components/Deck';

export default class DraftDeck extends React.Component {

  render() {
    return (
      <div className="draft-deck">
        <h1 className="draft-deck-title">Deck</h1>
        <Deck deck={this.props.deck}/>
      </div>
    )
  }

}