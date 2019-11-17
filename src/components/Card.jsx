import React from 'react'

export const Card = (props) => {
  console.log(props);
  return (
    <>
      <div>
        {props.info.name}
      </div>
    </>
  )
}