import { Button } from "react-bootstrap";
import { useThemeSwitcher } from 'react-css-theme-switcher';

const ThemeSwitcher: React.FC = () => {
  const { switcher, themes, currentTheme } = useThemeSwitcher();

  const handleChange = () => {
    switcher({ theme: currentTheme === 'light' ? 'dark' : 'light' });
    localStorage.setItem('theme', currentTheme === 'light' ? 'dark' : 'light');
  };

  const BiMoon = () => (<i className="bi bi-moon"></i> );
  const BiSun = () => (<i className="bi bi-sun"></i> );

  return (
    <Button variant={currentTheme === "light" ? "dark" : "light"} onClick={handleChange}>
      {currentTheme === "light" ? <BiMoon /> : <BiSun />}
      <span className="ms-2">{currentTheme === "light" ? "Dark Mode" : "Light Mode"}</span>
    </Button>
  );
};

export default ThemeSwitcher;