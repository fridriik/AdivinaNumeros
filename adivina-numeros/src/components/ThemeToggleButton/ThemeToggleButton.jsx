import './ThemeToggleButton.css';

const ThemeToggleButton = () => {
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className='change-theme' onClick={toggleTheme}>
      <h4>Cambiar tema</h4>
      <span className="material-icons">light_mode</span>
    </div>
  );
};

export default ThemeToggleButton;
