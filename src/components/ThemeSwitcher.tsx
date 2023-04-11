import { Button as BootstrapButton } from "react-bootstrap";
import styled from "styled-components";

const Button = styled(BootstrapButton)`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.primary};
  font-size: 24px;
  cursor: pointer;
  border-radius: 100px;
  &:hover {
    color: ${(props) => props.theme.colors.link};
    background-color: transparent;
  }
  &:focus {
    outline: none;
    background-color: transparent;
  }
  &:active {
    outline: none;
    background-color: transparent;
  }

`;

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
    </Button>
  );
};

export default ThemeSwitcher;


const BiMoon = () => (<i className="bi bi-moon"></i>);
const BiSun = () => (<i className="bi bi-sun"></i>);