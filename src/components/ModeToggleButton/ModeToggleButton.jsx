import './ModeToggleButton.css';

const ModeToggleButton = ({ mode, toggleMode }) => {
  const handleClick = () => {
    toggleMode();
  };

  return (
    <div className='change-mode' onClick={handleClick}>
      <h4>Cambiar a modo {mode === 'classic' ? 'scratch' : 'clásico'}</h4>
      <span className="material-icons">change_circle</span>
    </div>
  );
};

export default ModeToggleButton;