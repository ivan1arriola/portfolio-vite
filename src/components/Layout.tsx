import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
};

const Layout = ({ darkMode, setDarkMode, children }: LayoutProps) => {
  return (
    <>
      <div className='header'>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <div className='body'>{children}</div>

      <div className='footer'>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
