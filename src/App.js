import Nav from './components/Nav';
import Cards from './components/Cards';
import Form from './components/Form';
import { useState } from 'react';
import useFetch from './components/useFetch';

function App() {

  const [name, setName] = useState("Robe.");
  const { data, isLoading, fetchData } = useFetch('http://localhost:7000/arrayDatos');
  
  
  return (
    
    <div className="App">
        <Nav name={name}/>
        <div className='App__home'>
          <Form />
          {isLoading && <div style={{textAlign:"center"}}>Loading...</div>}
          {fetchData && <div>{fetchData}</div>}
          {data && <Cards data={data}/>}
        </div>
    </div>
  );
}

export default App;
