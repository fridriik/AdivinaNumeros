const GuessInput = ({ guess, setGuess, gameOver }) => (
    <input
      type="number"
      value={guess}
      onChange={(e) => setGuess(e.target.value)}
      disabled={gameOver}
    />
  );
  
  export default GuessInput;  