import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

import goldy from './images/goldy.jpg';

function App() {
  return (
    <div className="App">
      <Card image={goldy} name="golden retriever" />
    </div>
  );
}

export default App;
