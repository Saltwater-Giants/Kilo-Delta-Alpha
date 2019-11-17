import React from 'react';
import './Card.css';

export const Card = (props) => {
  if (props === undefined || props.info === undefined) return null;

  var context = require.context('../ext/datadragon-set1-lite/en_us/img/cards/', true, /\.(png)$/);

  if (props.info.cardCode !== undefined) {
    return (
      <>
        <img src={context('./' + props.info.cardCode + '.png')} className="card-image" />
      </>
    );
  }

  return (
    <>
      <div>
        {props.info.name}
      </div>
    </>
  )
}