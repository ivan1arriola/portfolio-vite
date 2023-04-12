 // route: /App.tsx

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';


// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from "styled-components";
import ContainerApp from './styledcomponents/ContainerApp';
import theme from './styledcomponents/Theme';
import FullPage from './components/FullPage';


function App() {
  const globalTheme: boolean = localStorage.getItem('darkMode') === 'true' ? true : false;
  const localTheme: boolean | null = localStorage.getItem('darkMode') === 'true' ? true : false;

  const [darkMode, setDarkMode] = useState(localTheme ? localTheme : globalTheme);
  const actualTheme = darkMode ? theme.dark : theme.light;



  return (
    <ThemeProvider theme={actualTheme}>
      <ContainerApp>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <FullPage />
        <Footer />
      </ContainerApp>
    </ThemeProvider>
  );
}

export default App;
