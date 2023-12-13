import React from "react";
import { range } from "../../utils";

function GuessResult({ guessesList }) {
  return (
    <div className="guess-results">
      {guessesList.map((guess, guessIndex) => (
        <p key={guessIndex} className="guess">
          {range(5).map((letter, letterIndex) => (
            <span key={letterIndex} className="cell">
              {guess[letter]}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResult;
