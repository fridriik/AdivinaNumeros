import { useState } from 'react';
import './App.css';
import GuessInput from './components/GuessInput/GuessInput';
import Message from './components/Message/Message';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import GameControls from './components/GameControls/GameControls';
import Header from './components/Header/Header';
import SecretNumberDisplay from './components/SecretNumberDisplay/SecretNumberDisplay';


const App = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Ingresa un número del 1 al 20 en el campo para ver si adivinas');
  const [messageClass, setMessageClass] = useState('');
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);
  const [theme, setTheme] = useState('light');
  const [gameOver, setGameOver] = useState(false);
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 20) + 1);
  const [isCorrect, setIsCorrect] = useState(false);


  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleGuess = () => {
    const guessNumber = parseInt(guess);
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
    }
    else {
      setMessage('¡Muy alto! Intenta un número más bajo');
      setMessageClass('incorrect');
      setScore(score - 1);
    }

    if (score - 1 === 0) {
      setMessage('¡Perdiste! El número secreto era ' + secretNumber);
      setIsCorrect(false);
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setGuess('');
    setMessage('');
    setMessageClass('');
    setScore(20);
    setGameOver(false);
    setSecretNumber(Math.floor(Math.random() * 20) + 1);
  };

  return (
    <div className="App">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div>
        <h1>Adivinar el Número (entre 1 y 20)</h1>
        <SecretNumberDisplay gameOver={gameOver} secretNumber={secretNumber} isCorrect={isCorrect} />
      </div>
      <div className='display-game'>
        <div>
          <Message message={message} messageClass={messageClass} />
          <ScoreBoard score={score} highScore={highScore} />
        </div>
        <div>
          <GuessInput guess={guess} setGuess={setGuess} gameOver={gameOver} />
          <GameControls handleGuess={handleGuess} resetGame={resetGame} gameOver={gameOver} />
        </div>
      </div>
    </div>
  );
};

export default App;