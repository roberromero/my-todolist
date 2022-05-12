import React from 'react'
import './Nav.css'

function Nav({name}) {
  return (
    <div className='nav'>
        <p className='nav__p'>ToDoList de {name}</p>
    </div>
  )
}

export default Nav