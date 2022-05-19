import Nav from './components/Nav';
import Cards from './components/Cards';
import FetchData from './components/FetchData';
import Form from './components/Form';

function App() {

  const nam = "Roberto";
  const data = FetchData();
  
  return (
    <div className="App">
        <Nav name={nam}/>
        <Form />
        {data && <Cards data={data}/>}
    </div>
  );
}

export default App;
