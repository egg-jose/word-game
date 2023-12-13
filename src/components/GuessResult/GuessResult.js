import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function GuessResult({ guessesList }) {
  return (
    <div className="guess-results">
      {guessesList.map((guess, guessIndex) => (
        <Guess key={guessIndex} guess={guess} />
      ))}
    </div>
  );
}

export default GuessResult;
