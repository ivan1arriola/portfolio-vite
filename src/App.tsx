import React from 'react';
import Header from './Cuerpo/Components/Header';
import './App.css';
import Cuerpo from './Cuerpo';
import Footer from './Cuerpo/Components/Footer';


function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="App">
        <Cuerpo />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
