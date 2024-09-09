import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import ModeToggleButton from '../ModeToggleButton/ModeToggleButton';
import './Header.css';

const Header = ({ theme, toggleTheme, mode, toggleMode }) => {
  return (
    <header className="header">
      <ModeToggleButton mode={mode} toggleMode={toggleMode} />
      <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
    </header>
  );
};

export default Header;