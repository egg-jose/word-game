import React from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesList, setGuessesList] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED)
  );
  const [nextGuessIndex, setNextGuessIndex] = React.useState(0);

  function addGuess(newGuess) {
    if (nextGuessIndex < 6) {
      const nextGuessesList = [...guessesList];
      nextGuessesList[nextGuessIndex] = newGuess;
      setGuessesList(nextGuessesList);
      setNextGuessIndex(nextGuessIndex + 1);
    }
  }
  return (
    <>
      <GuessResult guessesList={guessesList} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
