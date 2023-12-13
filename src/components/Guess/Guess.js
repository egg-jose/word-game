import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((letter, letterIndex) => (
        <span key={letterIndex} className="cell">
          {guess[letter]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
