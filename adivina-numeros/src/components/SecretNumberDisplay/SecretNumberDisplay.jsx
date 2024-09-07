import './SecretNumberDisplay.css';

const SecretNumberDisplay = ({ gameOver, secretNumber, isCorrect }) => {
  let circleClass = 'secret-number default'; 
  if (gameOver) {
    circleClass = isCorrect ? 'secret-number correct' : 'secret-number incorrect';
  }

  return (
    <div className={circleClass}>
      {gameOver ? secretNumber : '?'}
    </div>
  );
};

export default SecretNumberDisplay;
