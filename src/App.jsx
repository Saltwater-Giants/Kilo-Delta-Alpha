import React from 'react';
import './App.css';
import { getActiveDeckList, getCardPositions, getExpeditionState } from './api-framework/api';

export default class App extends React.Component {
  state = {data: {}};

  async componentDidMount() {
    this.setState({data: await getExpeditionState()});
    let intervalId = setInterval(() => {getExpeditionState().then((response) => {this.setState({data: response})})}, 10000);
    let intervalId2 = setInterval(() => {getCardPositions().then(() => {})}, 10000);
  }

  render(){
    return (
      <div className="App">
        <div>
          <h1>IsActive</h1>
          <div>{Boolean(this.state.data.IsActive).toString()}</div>
        </div>
        <div>
          <h1>Deck</h1>
          <div>{this.state.data.Deck}</div>
        </div>
        <div>
          <h1>Picks</h1>
          <div>{this.state.data.Picks}</div>
        </div>
        <div>
          <h1>Games</h1>
          <div>{this.state.data.Games}</div>
        </div>
        <div>
          <h1>Losses</h1>
          <div>{this.state.data.Losses}</div>
        </div>
        <div>
          <h1>Wins</h1>
          <div>{this.state.data.Wins}</div>
        </div>
        <div>
          <h1>Record</h1>
          <div>{this.state.data.Record}</div>
        </div>
        <div>
          <h1>State</h1>
          <div>{this.state.data.State}</div>
        </div>
      </div>
    );
  }
}
