import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import {data} from './data';
import goldy from './images/goldy.jpg';


function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  return (
    <div className="App">
      <header className="app-header">Puppy Memory Game</header>
      <div className='score-container'>
        <div className='current-score'>Current Score: <span className='current-score-num'>{ currentScore }</span></div>
        <div className='high-score'>High Score: <span className='high-score-num'>{ topScore }</span></div>
      </div>
      <div className="card-container">
        {data.map(dog => (
          <Card key={dog.name} name={dog.name} image={dog.url} setCurrentScore={setCurrentScore} currentScore={currentScore} topScore={topScore} setTopScore={setTopScore} />
        ))}
      </div>
    </div>
  );
}

export default App;
