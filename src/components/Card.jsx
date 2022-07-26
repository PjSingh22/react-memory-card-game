import React from 'react';

export default function Card({ image, name }) {
  const [checked, setChecked] = React.useState(false);
  const [cardImg, setCardImg] = React.useState(image);
  const [cardName, setCardName] = React.useState(name);

  React.useEffect(() => {
    setCardImg(image);
    setCardName(name);
  }
  , [image, name]);

  return (
    <div className="card">
      <div className="card-image" style={{ backgroundImage: `url(${cardImg})` }}>
        {/* <img src={cardImg} alt={cardName} /> */}
      </div>
      <div className="card-name">
        {cardName}
      </div>
    </div>
  )
}