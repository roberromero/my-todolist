import React from 'react'
import './Cards.css'
import FetchData from './FetchData';

function Cards({ data }) {

  const datos= data;
  const handleDelete = (e) => {
      const elemento = e.target.parentElement.id
    console.log(elemento);      
    // ESTOY A PUNTO................
  }

  return (
    <div className='containerCards'>
       {
         datos.map(item=>{
           return <div className='containerCard' value={item['id']} key={item['id']} id={item['id']}>
                    <p><b>Task:</b> {item['Task']}</p>
                    <p><b>Task description:</b> {item['TaskDescription']}</p>
                    <button onClick={handleDelete}>Delete</button>
                  </div>
         })
       }
    </div>
  )
}

export default Cards