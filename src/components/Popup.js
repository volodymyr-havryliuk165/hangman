import React from 'react'
import './css/Popup.css'

export default function Popup({ word, reset, gameState }) {
  const { win, lose } = gameState;
  let popupHeader;
  if (win) {
    popupHeader = 'Congratulations! You won!';
  }
  if (lose) {
    popupHeader = `You lost! The word was '${word}'`;
  }

  return (
    (win || lose) && (
      <div className="popup-container">
        <div className="popup">
          <h2>{popupHeader}</h2>
          <button onClick={reset}>Play again</button>
        </div>
      </div>
    )
  );
}
