import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResult({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((value) => (
        <Guess key={value} value={guesses[value]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResult;
