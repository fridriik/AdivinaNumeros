import './ThemeToggleButton.css';

const ThemeToggleButton = () => {
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <span onClick={toggleTheme} className="material-icons">light_mode</span>
  );
};

export default ThemeToggleButton;
