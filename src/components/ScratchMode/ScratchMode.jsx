import { useState, useEffect } from 'react';
import Message from '../Message/Message';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import ScratchControls from '../ScratchControls/ScratchControls';
import './ScratchMode.css';

const ScratchMode = ({
  gameOver,
  secretNumber,
  setGuess,
  message,
  messageClass,
  score,
  highScore,
  handleGuess,
  resetGame,
}) => {
  const [scratched, setScratched] = useState(Array(20).fill(false));

  useEffect(() => {
    if (!gameOver && score === 20) {
      setScratched(Array(20).fill(false));
    }
  }, [gameOver, score]);

  const handleScratch = (number) => {
    if (!gameOver && !scratched[number - 1]) {
      setScratched((prev) => {
        const newScratched = [...prev];
        newScratched[number - 1] = true;
        return newScratched;
      });
      setGuess(number.toString());
      handleGuess(number);
    }
  };

  return (
    <div className='display-main-grid'>
      <div className='display-container-grid'>
        <Message message={message} messageClass={messageClass} />
        <ScoreBoard score={score} highScore={highScore} />
        <div className='scratch-mode'>
          <div className='scratch-grid'>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => handleScratch(number)}
                disabled={scratched[number - 1] || gameOver}
                className={`scratch-button ${scratched[number - 1] ? 'scratched' : ''} ${
                scratched[number - 1] && number === secretNumber ? 'correct' : ''
                }`}
              >
                {number}
              </button>
            ))}
          </div>
          <div>
            <ScratchControls resetGame={resetGame} gameOver={gameOver} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScratchMode;
