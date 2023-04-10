import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const ThemeSwitcher: React.FC = () => {

  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem('theme') || (prefersDarkMode ? 'dark' : 'light')
  );

  useEffect(() => {
    const root = document.documentElement;
    if (currentTheme === "dark") {
      root.classList.add("dark-mode");
      root.style.setProperty("--primary-color", "#50c9ce");
      root.style.setProperty("--secondary-color", "#f5c689");
      root.style.setProperty("--background-color", "#000000");
      root.style.setProperty("--box-shadow", "0 0 10px rgba(255, 255, 255, 0.5)");
      root.style.setProperty("--navbar-background-color", "#121212");
      root.style.setProperty("--link-color", "#e84c3d");
      root.style.setProperty("--text-color", "#f5f5f5");
      root.style.setProperty("--card-background-color", "#212529");
      root.style.setProperty("--card-color", "#f5f5f5");
      root.style.setProperty("--imagen-filter", "drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))");
      root.style.setProperty("--bs-body-bg", "#000000");
      root.style.setProperty("--bs-body-color", "#f5f5f5");


    } else {
      root.classList.remove("dark-mode");
      root.style.setProperty("--primary-color", "#7E9CAE");
      root.style.setProperty("--secondary-color", "#FFB347");
      root.style.setProperty("--background-color", "#ffffff");
      root.style.setProperty("--box-shadow", "0 0 10px rgba(0, 0, 0, 0.1)");
      root.style.setProperty("--navbar-background-color", "#354F52");
      root.style.setProperty("--link-color", "#FF5A5F");
      root.style.setProperty("--text-color", "#333333");
      root.style.setProperty("--card-background-color", "#F2F2F2");
      root.style.setProperty("--card-color", "#000000");
      root.style.setProperty("--imagen-filter", "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))");
      root.style.setProperty("--bs-body-bg", "#ffffff");
      root.style.setProperty("--bs-body-color", "#333333");

    }
  }, [currentTheme]);

  const handleChange = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setCurrentTheme(newTheme);
    console.log(newTheme);
    document.documentElement.style.setProperty('--color-scheme', newTheme);
  };

  const BiMoon = () => (<i className="bi bi-moon"></i>);
  const BiSun = () => (<i className="bi bi-sun"></i>);

  return (
    <Button variant={currentTheme === "light" ? "dark" : "light"} onClick={handleChange}>
      {currentTheme === "light" ? <BiMoon /> : <BiSun />}
      <span className="ms-2">{currentTheme === "light" ? "Dark Mode" : "Light Mode"}</span>
    </Button>
  );
};

export default ThemeSwitcher;
