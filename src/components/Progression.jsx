import React from 'react';
import loss from '../images/Sprite/Btn_Status_Yellow.png';
import './Progression.css';
import { LimitedMainTrack } from './LimitedMainTrack';

export class Progression extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProgression: true
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener('resize', this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ showProgression: window.innerWidth > 800 });
  }

  render() {
    const showProgression = this.state.showProgression;
    return (
      <>
        {showProgression && (
          <div className="progression">
            {/*need to add fails and track in between*/}
            <LimitedMainTrack isWon={this.props.wins === 1} />
            <LimitedMainTrack isWon={this.props.wins === 2} />
            <LimitedMainTrack isWon={this.props.wins === 3} />
            <LimitedMainTrack isWon={this.props.wins === 4} />
            <LimitedMainTrack isWon={this.props.wins === 5} />
            <LimitedMainTrack isWon={this.props.wins === 6} />
            <LimitedMainTrack isWon={this.props.wins === 7} />
          </div>
        )}
      </>
    );
  }
}
