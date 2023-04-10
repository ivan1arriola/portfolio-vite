import './Estilos/App.css';
import Header from './Cuerpo/Components/Header';
import Cuerpo from './Cuerpo';
import Footer from './Cuerpo/Components/Footer';

import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
const themes = {
  light: './Estilos/ModoClaro.css',
  dark: './Estilos/ModoOscuro.css',
};

const storedTheme = localStorage.getItem('theme');
const defaultTheme = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

function App() {
  return (
    <ThemeSwitcherProvider defaultTheme={defaultTheme} themeMap={themes}>
      <header>
        <Header />
      </header>

      <main className="App">
        <Cuerpo />
      </main>

      <footer>
        <Footer />
      </footer>
    </ThemeSwitcherProvider>
  );
}

export default App;
