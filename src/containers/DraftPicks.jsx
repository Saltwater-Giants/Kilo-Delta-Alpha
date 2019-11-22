import React from 'react';
import { getCardPositions } from '../api-framework/api';
import { draftPicksFromRectangles, draftTradesFromRectangles } from '../cards/CardUtils';
import { CardPicks } from '../components/CardPicks';
import './DraftPicks.css';
import { CardTrades } from '../components/CardTrades';

export default class DraftPicks extends React.Component {
  state = { currentPicks: [] };

  async componentDidMount() {
    let rectangles = await getCardPositions().Rectangles;
    let intervalId = setInterval(() => {
      getCardPositions().then(response => {
        this.setState({ currentPicks: draftPicksFromRectangles(response.Rectangles) });
        this.setState({ currentTrades: draftTradesFromRectangles(response.Rectangles) });
      });
    }, 1000);
    this.setState({
      intervalId: intervalId,
      currentPicks: draftPicksFromRectangles(rectangles),
      currentTrades: draftTradesFromRectangles(rectangles)
    });
  }

  render() {
    return (
      <div className="draft-picks">
        {(() => {
          switch (this.props.State) {
            case 'Swapping':
              return (
                <div>
                  <CardTrades trades={this.state.currentTrades} />
                </div>
              );
            case 'Picking':
              return (
                <div className="draft-picks-picks">
                  {this.state.currentPicks.map((item, i) => (
                    <CardPicks key={i} number={i} cards={item} />
                  ))}
                </div>
              );
            default:
              return null;
          }
        })()}
      </div>
    );
  }
}
