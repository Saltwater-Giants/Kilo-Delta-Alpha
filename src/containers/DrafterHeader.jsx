import React from 'react';
import { HeaderItem } from '../components/HeaderItem';

export default class DraftHeader extends React.Component {

  render() {
    return (
      <>
        <HeaderItem title="Active" data={Boolean(this.props.IsActive).toString()}/>
        <HeaderItem title="Games" data={this.props.Games}/>
        <HeaderItem title="Losses" data={this.props.Losses}/>
        <HeaderItem title="Wins" data={this.props.Wins}/>
        <HeaderItem title="Record" data={this.props.Record}/>
        <HeaderItem title="State" data={this.props.State}/>
      </>
    )
  }

}