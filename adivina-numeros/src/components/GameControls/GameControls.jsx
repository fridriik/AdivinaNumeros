const GameControls = ({ handleGuess, resetGame, gameOver }) => (
    <div>
      <button className="test-button" onClick={handleGuess} disabled={gameOver}>Probar</button>
      {gameOver && <button onClick={resetGame}>Reiniciar Juego</button>}
    </div>
  );
  
  export default GameControls;
  