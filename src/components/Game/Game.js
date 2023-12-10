import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesList, setGuessesList] = React.useState([]);

  function addGuess(newGuess) {
    if (guessesList.length <= 6) {
      setGuessesList([...guessesList, newGuess]);
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
