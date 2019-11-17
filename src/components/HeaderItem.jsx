import React from 'react';
import './HeaderItem.css'

export const HeaderItem = props => {
  return (
    <div className="header-item">
      <div className="header-item-title">{props.title}</div>
      <div className="header-item-data">
        {props.data}
      </div>
    </div>
  )
};