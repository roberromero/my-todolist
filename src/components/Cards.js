import React from 'react'
import './Cards.css'

function Cards({ data }) {

  const datos= data.arrayDatos;

  return (
    <div className='containerCards'>
       {
         datos.map(item=>{
           return <p key={item['id']}>{item['Task']}</p>
         })
       }
    </div>
  )
}

export default Cards