import React from 'react';
import './DraftDeck.css'

export default class DraftDeck extends React.Component {

  render() {
    return (
      <div>
        <h1 className="draft-deck-title">Deck</h1>
        <div>{this.props.deck}</div>
      </div>
    )
  }

}