import React from 'react'
import './Cards.css'

function Cards({ data }) {

  const datos= data;

  return (
    <div className='containerCards'>
       {
         datos.map(item=>{
           return <div className='containerCard' key={item['id']}>
                    <p><b>Task:</b> {item['Task']}</p>
                    <p><b>Task description:</b> {item['TaskDescription']}</p>
                    <button>Delete</button>
                  </div>
         })
       }
    </div>
  )
}

export default Cards