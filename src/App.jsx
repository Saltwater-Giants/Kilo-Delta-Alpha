import React from 'react';
import './App.css';
import { getCardPositions, getExpeditionState } from './api-framework/api';
import { draftPicksFromRectangles } from './cards/CardUtils';
import { CardPicks } from './components/CardPicks';

export default class App extends React.Component {
  state = {expeditionData: {}, currentPicks: []};

  async componentDidMount() {
    let rectangles = await getCardPositions().Rectangles;
    this.setState({expeditionData: await getExpeditionState(),
      currentPicks: draftPicksFromRectangles(rectangles)});
    let intervalId = setInterval(() => {getExpeditionState().then((response) => {this.setState({expeditionData: response})})}, 10000);
    let intervalId2 = setInterval(() => {getCardPositions().then((response) => {this.setState({currentPicks: draftPicksFromRectangles(response.Rectangles)})})}, 10000);
  }

  render(){
    return (
      <div className="App">
        <div>
          <h1>IsActive</h1>
          <div>{Boolean(this.state.expeditionData.IsActive).toString()}</div>
        </div>
        <div>
          <h1>Deck</h1>
          <div>{this.state.expeditionData.Deck}</div>
        </div>
        <div>
          <h1>Picks</h1>
          <div>{this.state.currentPicks.map((item, i) => (
            <CardPicks key={i} number={i} cards={item}/>
          ))}</div>
        </div>
        <div>
          <h1>Games</h1>
          <div>{this.state.expeditionData.Games}</div>
        </div>
        <div>
          <h1>Losses</h1>
          <div>{this.state.expeditionData.Losses}</div>
        </div>
        <div>
          <h1>Wins</h1>
          <div>{this.state.expeditionData.Wins}</div>
        </div>
        <div>
          <h1>Record</h1>
          <div>{this.state.expeditionData.Record}</div>
        </div>
        <div>
          <h1>State</h1>
          <div>{this.state.expeditionData.State}</div>
        </div>
      </div>
    );
  }
}
