import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesList, setGuessesList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("playing");

  function addGuess(tentativeGuess) {
    if (guessesList.length >= 6 || gameStatus !== "playing") return;

    const nextGuessesList = [...guessesList, tentativeGuess];
    setGuessesList(nextGuessesList);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuessesList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResult guesses={guessesList} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={gameStatus !== "playing"} />
      {gameStatus === "won" && (
        <HappyBanner numOfGuesses={guessesList.length} />
      )}
      {gameStatus === "lost" && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
