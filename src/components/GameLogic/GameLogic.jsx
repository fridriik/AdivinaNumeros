import { useState } from 'react';

const useGameLogic = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Elegí un número del 1 al 20');
  const [messageClass, setMessageClass] = useState('');
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 20) + 1);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleGuess = (guessNumber) => {
    if (guessNumber < 1 || guessNumber > 20) {
      setMessage('Por favor, elige un número entre 1 y 20.');
      setMessageClass('warning');
    } else {
      if (guessNumber === secretNumber) {
        setMessage(`¡Correcto! El número secreto es ${secretNumber}`);
        setMessageClass('correct');
        setIsCorrect(true);
        if (score > highScore) {
          setHighScore(score);
        }
        setGameOver(true);
      } else if (guessNumber < secretNumber) {
        setMessage('¡Muy bajo! Intenta un número más alto');
        setMessageClass('incorrect');
        setScore(score - 1);
      } else {
        setMessage('¡Muy alto! Intenta un número más bajo');
        setMessageClass('incorrect');
        setScore(score - 1);
      }

      if (score - 1 === 0) {
        setMessage('¡Perdiste! El número secreto era ' + secretNumber);
        setIsCorrect(false);
        setGameOver(true);
      }
    }
  };

  const resetGame = () => {
    setGuess('');
    setMessage('Elegí un número del 1 al 20');
    setMessageClass('');
    setScore(20);
    setGameOver(false);
    setSecretNumber(Math.floor(Math.random() * 20) + 1);
    setIsCorrect(false);
  };

  return {
    guess,
    setGuess,
    message,
    messageClass,
    score,
    highScore,
    gameOver,
    secretNumber,
    isCorrect,
    handleGuess,
    resetGame,
  };
};

export default useGameLogic;
