import React from 'react';
import './App.css';
import { getExpeditionState, getGameResult } from './api-framework/api';
import DraftHeader from './containers/DrafterHeader';
import DraftDeck from './containers/DraftDeck';
import DraftPicks from './containers/DraftPicks';

export default class App extends React.Component {
  state = {expeditionData: {},
    wins: (localStorage.getItem('totalWins') == null) ? 0 : parseInt(localStorage.getItem('totalWins')),
    games: (localStorage.getItem('totalGames') == null) ? 0 : parseInt(localStorage.getItem('totalGames')),
    lastGameId: (localStorage.getItem('lastGameId') == null) ? -1 : parseInt(localStorage.getItem('lastGameId'))
  };

  checkForWinUpdate(response) {
    if (this.state.lastGameId != response.GameID) {
      console.log(this.state.lastGameId.toString());
      localStorage.setItem('lastGameId', response.GameID.toString());
      this.setState({lastGameId: response.GameID});
      localStorage.setItem('totalWins', this.state.games.toString());
      this.setState({games: this.state.games + 1});
      if (response.LocalPlayerWon) {
        localStorage.setItem('totalWins', this.state.wins.toString());
        this.setState({wins: this.state.wins + 1});
      }
    }
  }

  async componentDidMount() {
    let intervalId = setInterval(() => {getExpeditionState().then((response) => {this.setState({expeditionData: response})})}, 2500);
    this.setState({intervalId: intervalId, expeditionData: await getExpeditionState()});
    let winsIntervalId = setInterval(() => {getGameResult().then((response) => {this.checkForWinUpdate(response)})}, 5000);
  }

  generateScoreTemplate() {
    const data = require('./ext/datadragon-set1-lite/en_us/data/set1-en_us');
    let cardScoreList = [];
    data.forEach(card=>{
      if (card.collectible) {
        cardScoreList.push({ name: card.name, id: card.cardCode, cost: card.cost, score: 0 })
      }
    });
  };

  render(){
    return (
      //check for active and state to change what is on screen
      <div className="App">
        <div className="draft-header">
          <DraftHeader {...this.state.expeditionData} Wins={this.state.wins} Games={this.state.games}/>
        </div>
        <div className="draft-deck">
          <DraftDeck deck={this.state.expeditionData.Deck}/>
        </div>
        <div className="deck-picks">
          <DraftPicks {...this.state.expeditionData}/>
        </div>
      </div>
    )
  }
}
