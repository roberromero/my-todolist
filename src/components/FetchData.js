import { useState, useEffect } from 'react'

function FetchData() {
    const [data, setData] = useState(null);

        useEffect(()=>{
        fetch('http://localhost:7000/arrayDatos')
        .then(response => response.json())
        .then(dat => {
            setData(dat);
            
        } );

}, []);
  return data;
}

export default FetchData
