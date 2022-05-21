import React from 'react'
import './Nav.css'

function Nav({name}) {
  return (
    <div className='nav'>
        <p className='nav__p'>"To Do" List by {name}</p>
    </div>
  )
}

export default Nav