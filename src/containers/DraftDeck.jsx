import React from 'react';

export default class DraftDeck extends React.Component {

  render() {
    return (
      <div>
        <h1>Deck</h1>
        <div>{this.props.deck}</div>
      </div>
    )
  }

}