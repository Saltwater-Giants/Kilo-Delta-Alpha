import React from 'react'

export const CardPicks = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        {props.info.name}
      </div>
    </div>
  )
}