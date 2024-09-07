import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import './Header.css';

const Header = ({ theme, toggleTheme }) => (
  <header className="header">
    <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
  </header>
);

export default Header;
