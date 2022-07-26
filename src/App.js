import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import {data} from './data';
import goldy from './images/goldy.jpg';


function App() {

  return (
    <div className="App">
      <header className="app-header">Puppy Memory Game</header>
      <div className="card-container">

      </div>
      <Card image={goldy} name="golden retriever" />
    </div>
  );
}

export default App;
