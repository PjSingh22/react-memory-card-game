import React from 'react';

export default function Card({ image, name, setCurrentScore, setTopScore, setGameOver, currentScore, topScore, checked, resetGame, data, shuffleCards }) {
  const [checkCard, setCheckCard] = React.useState(checked);
  const [cardImg, setCardImg] = React.useState(image);
  const [cardName, setCardName] = React.useState(name);

  const increaseScore = () => {
    setCurrentScore(currentScore => currentScore + 1);
    setCheckCard(true);
    shuffleCards();
    if(checkCard) {
      setCurrentScore(currentScore => currentScore - 1);
      gameOver();
    }
  }
  
  const gameOver = () => {
    setGameOver(true);
  }

  return (
    <div className="card" onClick={increaseScore}>
      <div className="card-image" style={{ backgroundImage: `url(${cardImg})` }} />
      <div className="card-name">
        {cardName}
      </div>
    </div>
  )
}