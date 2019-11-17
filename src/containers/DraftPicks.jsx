import React from 'react';
import { getCardPositions } from '../api-framework/api';
import { draftPicksFromRectangles } from '../cards/CardUtils';
import { CardPicks } from '../components/CardPicks';
import './DraftPicks.css'

export default class DraftPicks extends React.Component {
  state = {currentPicks: []};

  async componentDidMount() {
    let rectangles = await getCardPositions().Rectangles;
    let intervalId = setInterval(() => {getCardPositions().then((response) => {this.setState({currentPicks: draftPicksFromRectangles(response.Rectangles)})})}, 1000);
    this.setState({intervalId: intervalId, currentPicks: draftPicksFromRectangles(rectangles)});
  }

  render() {
    return (
      <div>
        <h1 className="draft-picks-title">Picks</h1>
        <div className="draft-picks-picks">{this.state.currentPicks.map((item, i) => (
          <CardPicks key={i} number={i} cards={item}/>
        ))}</div>
      </div>
    )
  }
}