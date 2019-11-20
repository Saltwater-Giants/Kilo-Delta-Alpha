import React from 'react'
import './TotalWins.css'

export const TotalWins = props => {
  return(
    <div className="total-wins">
      <div className="total-wins-text">
        <div>
          TOTAL
        </div>
        <div>
          WINS:
        </div>
      </div>
      <div className="total-wins-wins">
        <span>
        {props.wins}
        </span>
      </div>
    </div>
  )
};