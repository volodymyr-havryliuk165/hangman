import React, { useEffect, useState } from 'react';
import { randomWord, rightGuess } from './helper-functions/helper';
import Errors from './Errors';
import Word from './Word';
import Notification from './Notification';
import showNotification from './helper-functions/showNotification';
import Popup from './Popup';
import './css/Game.css';

export default function Game() {
  const ALPHABETIC = /^[a-zA-Z]$/i;
  const MAX_ERRORS = 5;
  const words = ['apple', 'peach', 'orange', 'pear'];

  const [selectedWord, setWord] = useState(randomWord(words));

  const [user, updateUser] = useState({
    guess: '',
    errors: [],
  });

  const [win, setWin] = useState(false);
  const [show, toggle] = useState(false);

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  });

  function handleKeyPress(e) {
    if (ALPHABETIC.test(e.key)) {
      handleUserInput(e.key.toLowerCase());
    }
  }

  function handleUserInput(key) {
    if (user.guess.includes(key) || user.errors.includes(key)) {
      showNotification(toggle);
      return;
    }
    if (user.errors.length >= MAX_ERRORS || win) {
      return;
    }

    const updatedUser = { ...user };
    if (selectedWord.includes(key)) {
      updatedUser.guess = updatedUser.guess + key;
    } else {
      updatedUser.errors = [...updatedUser.errors, key];
    }

    if (rightGuess(updatedUser.guess, selectedWord)) {
      setWin(true);
    }
    updateUser(updatedUser);
  }

  return (
    <>
      <Popup
        word={selectedWord}
        reset={() => {
          updateUser({
            guess: '',
            errors: [],
          });
          setWord(randomWord(words));
          setWin(false);
        }}
        gameState={{ win, lose: user.errors.length >= MAX_ERRORS }}
      />
      <div className="game">
        <Errors errors={user.errors} />
        <Word word={selectedWord} input={user.guess} />
        <Notification show={show} />
      </div>
    </>
  );
}
