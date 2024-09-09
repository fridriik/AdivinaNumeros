import { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Header from './components/Header/Header';
import ClassicMode from './components/ClassicMode/ClassicMode';
import ScratchMode from './components/ScratchMode/ScratchMode';
import useGameLogic from './components/GameLogic/GameLogic';
import './App.css';

const App = () => {
  const {
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
  } = useGameLogic();

  const [theme, setTheme] = useState('light');
  const [mode, setMode] = useState('classic');

  const toggleMode = () => {
    setMode(prevMode => prevMode === 'classic' ? 'scratch' : 'classic');
    resetGame();
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
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
              gameOver={gameOver}
              secretNumber={secretNumber}
              isCorrect={isCorrect}
              guess={guess}
              setGuess={setGuess}
              message={message}
              messageClass={messageClass}
              score={score}
              highScore={highScore}
              handleGuess={handleGuess}
              resetGame={resetGame}
            />
          ) : (
            <ScratchMode
              gameOver={gameOver}
              secretNumber={secretNumber}
              setGuess={setGuess}
              message={message}
              messageClass={messageClass}
              score={score}
              highScore={highScore}
              handleGuess={handleGuess}
              resetGame={resetGame}
            />
          )}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default App;
