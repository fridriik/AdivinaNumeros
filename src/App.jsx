import { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Header from './components/Header/Header';
import ClassicMode from './components/ClassicMode/ClassicMode';
import ScratchMode from './components/ScratchMode/ScratchMode';
import './App.css'

const App = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Elegí un número del 1 al 20');
  const [messageClass, setMessageClass] = useState('');
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);
  const [theme, setTheme] = useState('light');
  const [gameOver, setGameOver] = useState(false);
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 20) + 1);
  const [isCorrect, setIsCorrect] = useState(false);
  const [mode, setMode] = useState('classic');
  const [resetKey, setResetKey] = useState(0);

  const toggleMode = () => {
    setMode(prevMode => prevMode === 'classic' ? 'scratch' : 'classic');
    resetGame();
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

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
    setResetKey(prevKey => prevKey + 1);
  };

  return (
    <div className="App">
      <Header 
        theme={theme}
        toggleTheme={toggleTheme}
        mode={mode}
        toggleMode={toggleMode}
      />
      <h1>Adivina el número</h1>
      <SwitchTransition>
        <CSSTransition
          key={mode}
          timeout={500}
          classNames="fade"
        >
          {mode === 'classic' ? (
            <ClassicMode
              key={`classic-${resetKey}`}
              gameOver={gameOver}
              secretNumber={secretNumber}
              isCorrect={isCorrect}
              guess={guess}
              setGuess={setGuess}
              message={message}
              messageClass={messageClass}
              score={score}
              highScore={highScore}
              handleGuess={(num) => handleGuess(num)}
              resetGame={resetGame}
            />
          ) : (
            <ScratchMode
              key={`scratch-${resetKey}`}
              gameOver={gameOver}
              secretNumber={secretNumber}
              setGuess={setGuess}
              message={message}
              messageClass={messageClass}
              score={score}
              highScore={highScore}
              handleGuess={(num) => handleGuess(num)}
              resetGame={resetGame}
            />
          )}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default App;
