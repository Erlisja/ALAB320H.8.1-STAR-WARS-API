import React from 'react'

function Card({starship}) {
  return (
    <div className='card'>{starship.name}</div>
  )
}

export default Card