const ScratchControls = ({ resetGame, gameOver }) => (
  <div>
    {gameOver && <button onClick={resetGame}>Reiniciar Juego</button>}
  </div>
);

export default ScratchControls;
