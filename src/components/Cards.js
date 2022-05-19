import React from 'react'
import './Cards.css'
import FetchData from './FetchData';

function Cards({ data }) {

  const datos= data;
  const handleDelete = (e) => {
      console.log(e);
  
  }

  return (
    <div className='containerCards'>
       {
         datos.map(item=>{
           return <div className='containerCard' value={item['id']} key={item['id']}>
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