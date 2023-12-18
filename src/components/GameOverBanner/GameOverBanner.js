import React from "react";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";

function GameOverBanner({ gameStatus, numOfGuesses, answer }) {
  const className = gameStatus === "won" ? "happy banner" : "sad banner";
  return (
    <div className={className}>
      {gameStatus === "won" ? (
        <HappyBanner numOfGuesses={numOfGuesses} />
      ) : (
        <SadBanner answer={answer} />
      )}
    </div>
  );
}

export default GameOverBanner;
