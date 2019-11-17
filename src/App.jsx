import React from 'react';
import './App.css';
import { getExpeditionState } from './api-framework/api';
import DraftHeader from './containers/DrafterHeader';
import DraftDeck from './containers/DraftDeck';
import DraftPicks from './containers/DraftPicks';

export default class App extends React.Component {
  state = {expeditionData: {}};

  async componentDidMount() {
    let intervalId = setInterval(() => {getExpeditionState().then((response) => {this.setState({expeditionData: response})})}, 10000);
    this.setState({intervalId: intervalId, expeditionData: await getExpeditionState()});
  }

  render(){
    return (
      <div className="App">
        <div className="draft-header">
          <DraftHeader {...this.state.expeditionData}/>
        </div>
        <div className="draft-deck">
          <DraftDeck deck={this.state.expeditionData.Deck}/>
        </div>
        <div className="deck-picks">
          <DraftPicks/>
        </div>
      </div>
    )
  }
}
