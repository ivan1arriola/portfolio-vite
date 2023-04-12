
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';




// Pages
import Estudios from './pages/Estudios';
import Experiencias from './pages/Proyectos';
import Presentacion from './pages/Presentacion';
import PrincipalesHabilidades from './pages/PrincipalesHabilidades';
import SobreMi from './pages/SobreMi';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from "styled-components";
import ContainerApp from './styledcomponents/ContainerApp';
import theme from './styledcomponents/Theme';
import Layout from './components/Layout';
import FullPage from './components/FullPage';


function App() {
  const globalTheme: boolean = localStorage.getItem('darkMode') === 'true' ? true : false;
  const localTheme: boolean | null = localStorage.getItem('darkMode') === 'true' ? true : false;

  const [darkMode, setDarkMode] = useState(localTheme ? localTheme : globalTheme);

  const actualTheme = darkMode ? theme.dark : theme.light;

  return (
    <ThemeProvider theme={actualTheme}>
      <ContainerApp>
        <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
          <FullPage />
        </Layout>
      </ContainerApp>
    </ThemeProvider>
  );
}

export default App;
