import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
// import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesList, setGuessesList] = React.useState([]);

  function addGuess(tentativeGuess) {
    if (guessesList.length >= 6) return;

    const nextGuessesList = [...guessesList, tentativeGuess];
    setGuessesList(nextGuessesList);
  }
  return (
    <>
      <GuessResult guesses={guessesList} answer={answer} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
