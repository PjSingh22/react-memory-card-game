import React from 'react';

export default function Card({ image, name, setCurrentScore, setTopScore, currentScore, topScore }) {
  const [checked, setChecked] = React.useState(false);
  const [cardImg, setCardImg] = React.useState(image);
  const [cardName, setCardName] = React.useState(name);

  const increaseScore = () => {
    setCurrentScore(currentScore => currentScore + 1);
    if (checked) {
      setChecked(false);
      return gameOver();
    }
    setChecked(true);
  }

  const gameOver = () => {
    setTopScore(currentScore);
    setCurrentScore(0);
  }

  React.useEffect(() => {
    setCardImg(image);
    setCardName(name);
  }
  , [image, name]);

  return (
    <div className="card" onClick={increaseScore}>
      <div className="card-image" style={{ backgroundImage: `url(${cardImg})` }}>
        {/* <img src={cardImg} alt={cardName} /> */}
      </div>
      <div className="card-name">
        {cardName}
      </div>
    </div>
  )
}