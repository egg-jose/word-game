import React from "react";

function GuessResult({ guessesList }) {
  return (
    <div className="guess-results">
      {guessesList.map((guess, index) => (
        <p key={index} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResult;
