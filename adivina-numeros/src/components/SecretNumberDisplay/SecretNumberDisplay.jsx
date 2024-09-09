import './SecretNumberDisplay.css';

const SecretNumberDisplay = ({ gameOver, secretNumber, isCorrect }) => {
  let circleClass = 'secret-number default'; 
  if (gameOver) {
    circleClass = isCorrect ? 'secret-number correct' : 'secret-number incorrect';
  }

  return (
    <div className={circleClass}>
      <h2>
        {gameOver ? secretNumber : '?'}
      </h2>
    </div>
  );
};

export default SecretNumberDisplay;
