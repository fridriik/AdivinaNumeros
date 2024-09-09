const ClassicControls = ({ handleGuess, resetGame, gameOver, guess }) => (
  <div>
    {!gameOver ? (
      <button 
        onClick={() => handleGuess(Number(guess))} 
        disabled={gameOver}
      >
        Probar
      </button>
    ) : (
      <button onClick={resetGame}>Reiniciar Juego</button>
    )}
  </div>
);

export default ClassicControls;
