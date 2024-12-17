import React from 'react'
import { Link } from 'react-router'

function Nav() {
  return (
    <nav className='nav'>
      <Link to='/'>Home</Link>
      STAR WAR STARSHIPS
      <Link to='/starships'>Starships</Link>
      </nav>
  )
}

export default Nav