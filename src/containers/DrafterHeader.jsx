import React from 'react';
import { HeaderItem } from '../components/HeaderItem';
import './DraftHeader.css';
import { TotalWins } from '../components/TotalWins';
import { Progression } from '../components/Progression';

export default class DraftHeader extends React.Component {
  //This needs to be improved to only render on props update
  render() {
    console.log(this.props);
    let wins = this.props.Wins;
    if(this.props.Record) {
      this.props.Record.forEach(record => {
        if (record === 'win') {
          wins = (wins || 0) + 1;
        }
      });
    }
    return (
      <>
        <div className="draft-header-header-items">
          {/*<HeaderItem title="Losses" data={this.props.Losses}/>*/}
          <TotalWins wins={wins} />
          <Progression wins={wins} losses={this.props.Losses} record={this.props.Record}/>
          {/*<HeaderItem title="Wins" data={this.props.Wins}/>*/}
          {/*<HeaderItem title="Games" data={this.props.Games} />*/}
          {/*<HeaderItem title="Active" data={Boolean(this.props.IsActive).toString()} />*/}
          {/*<HeaderItem title="Record" data={this.props.Record} />*/}
          {/*<HeaderItem title="State" data={this.props.State} />*/}
        </div>
        {/*<div className="draft-header-separator">*/}
          {/*<img className="draft-header-separator-image" src={separator} />*/}
        {/*</div>*/}
      </>
    );
  }
}
