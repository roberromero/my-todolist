import './Cards.css'

function Cards({ data }) {

  // const datos= data;
  const handleDelete = (e) => {
    const idToDelete= e.target.parentElement.id;
    console.log(idToDelete);
     
    fetch('http://localhost:7000/arrayDatos/' + idToDelete, {
      method: 'DELETE', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      })
      .then(response => response.json())
      .catch((error) => {
      console.error('Error:', error);
      });
      window.location.reload();
    //MÉTODO FILTER PARA ENCONTRAR EL OBJETO CON EL ID QUE QUERAMOS
    //   const newArray = data.filter(elemento => {
    //    return elemento.id != idToDelete;
    // })
  }

  return (
    <div className='containerCards'>
       {
         data.map(item=>{
           return <div className='containerCard' value={item['id']} key={item['id']} id={item['id']}>
                    <p><b>Task:</b> {item['Task']}</p>
                    <p><b>Task description:</b> {item['TaskDescription']}</p>
                    <b>Priority: <p className='containerCard__priority'>{item['Priority']}</p></b>
                    <button className='containerCard__delete' onClick={handleDelete}>Delete</button>
                  </div>
         })
       }
    </div>
  )
}

export default Cards