import React from "react";

function GuessInput({ addGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess: tentativeGuess });
    addGuess(tentativeGuess);
    setTentativeGuess("");
  }

  function handleOnChange(event) {
    const nextGuess = event.target.value;
    if (nextGuess.length <= 5) {
      setTentativeGuess(nextGuess.toUpperCase());
    }
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        autoComplete="off"
        value={tentativeGuess}
        onChange={handleOnChange}
        pattern="[a-zA-Z]{5}"
        title="5 letters guess"
      />
    </form>
  );
}

export default GuessInput;
