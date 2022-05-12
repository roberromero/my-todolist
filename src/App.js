import Nav from './components/Nav';
import Cards from './components/Cards';
import databaseCards from './database/databaseCards';

function App() {

  const nam = "Roberto";
  const data = databaseCards;
  
 
  
  return (
    <div className="App">
        <Nav name={nam}/>
        <Cards data={data}/>
    </div>
  );
}

export default App;
