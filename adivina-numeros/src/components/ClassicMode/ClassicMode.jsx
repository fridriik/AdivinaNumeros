import SecretNumberDisplay from '../SecretNumberDisplay/SecretNumberDisplay';
import GuessInput from '../GuessInput/GuessInput';
import Message from '../Message/Message';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import ClassicControls from '../ClassicControls/ClassicControls';
import './ClassicMode.css';

const ClassicMode = ({
  gameOver,
  secretNumber,
  isCorrect,
  guess,
  setGuess,
  message,
  messageClass,
  score,
  highScore,
  handleGuess,
  resetGame,
}) => {
  const onSubmitGuess = () => {
    const numberGuess = Number(guess);
    if (!isNaN(numberGuess)) {
      handleGuess(numberGuess);
    } else {
      console.log('Error: guess no es un número válido');
    }
  };

  return (
    <div className='display-main'>
      <SecretNumberDisplay gameOver={gameOver} secretNumber={secretNumber} isCorrect={isCorrect} />
      <div className='display-game'>
        <div>
          <Message message={message} messageClass={messageClass} />
          <ScoreBoard score={score} highScore={highScore} />
        </div>
        <div>
          <GuessInput guess={guess} setGuess={setGuess} gameOver={gameOver} />
          <ClassicControls 
            handleGuess={onSubmitGuess} 
            resetGame={resetGame} 
            gameOver={gameOver} 
          />
        </div>
      </div>
    </div>
  );
};

export default ClassicMode;
