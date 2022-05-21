import Nav from './components/Nav';
import Cards from './components/Cards';
import Form from './components/Form';
import { useEffect, useState } from 'react';

function App() {

  const nam = "Roberto";
  const [data, setData] = useState(null);
  useEffect(()=>{
    fetch('http://localhost:7000/arrayDatos')
        .then(response => {return response.json()})
        .then(dat => {
            setData(dat);
        } );
  }, [])
  
 
  
  return (
    <div className="App">
        <Nav name={nam}/>
        <Form />
        {data && <Cards data={data}/>}
    </div>
  );
}

export default App;
