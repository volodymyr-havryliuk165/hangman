function randomWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

function rightGuess(guess, selectedWord) {
  const setA = new Set(guess);
  const setB = new Set(selectedWord);
  return (
    setA.size === setB.size && [...setA].every((value) => setB.has(value))
  );
}

export { randomWord, rightGuess };