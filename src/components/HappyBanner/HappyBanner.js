import React from "react";

function HappyBanner({ numOfGuesses }) {
  return (
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>
        {" "}
        {numOfGuesses} {numOfGuesses > 1 ? "guesses" : "guess"}
      </strong>
      .
    </p>
  );
}

export default HappyBanner;
