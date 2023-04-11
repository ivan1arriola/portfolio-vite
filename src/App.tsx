
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import {useState} from 'react';

// Pages
import Estudios from './pages/Estudios';
import Experiencias from './pages/Experiencias';
import Presentacion from './pages/Presentacion';
import PrincipalesHabilidades from './pages/PrincipalesHabilidades';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from "styled-components";
import ContainerPrincipal from './styledcomponents/ContainerPrincipal';
import theme from './styledcomponents/Theme';


function App() {
  const globalTheme: boolean = localStorage.getItem('darkMode') === 'true' ? true : false;
  const localTheme: boolean | null = localStorage.getItem('darkMode') === 'true' ? true : false;

  const [darkMode, setDarkMode] = useState(localTheme ? localTheme : globalTheme);

  const actualTheme = darkMode ? theme.dark : theme.light;

  return (
    <ThemeProvider theme={actualTheme}>
      <ContainerPrincipal className="App">
        <div className='header'>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <div>
          <Presentacion />
          <hr />
          <PrincipalesHabilidades />
          <hr />
          <Estudios />
          <hr />
          <Experiencias />
        </div>

        <div className='footer'>
          <Footer />
        </div>
      </ContainerPrincipal>
    </ThemeProvider>
  );
}

export default App;
