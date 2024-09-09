const GuessInput = ({ guess, setGuess, gameOver }) => {
  const handleChange = (e) => {
    console.log(`Input value: ${e.target.value}, Type: ${typeof e.target.value}`);
    setGuess(e.target.value);
  };

  return (
    <input
      type="number"
      value={guess || ''}
      onChange={handleChange}
      disabled={gameOver}
    />
  );
};

export default GuessInput;
