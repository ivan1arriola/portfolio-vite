import { Button } from "react-bootstrap";

interface ThemeSwitcherProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ darkMode, setDarkMode }) => {

  const handleChange = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  return (
    <Button variant={darkMode ? "light" : "dark"} onClick={handleChange}>
      {darkMode ? <BiSun /> : <BiMoon />}
      <span className="ms-2">{darkMode ? "Light Mode" : "Dark Mode"}</span>
    </Button>
  );
};

export default ThemeSwitcher;


const BiMoon = () => (<i className="bi bi-moon"></i>);
const BiSun = () => (<i className="bi bi-sun"></i>);