import React from 'react';
import {Header} from './header/Header';
import {Footer} from './footer/Footer';

export const Layout: React.FC = ({children}) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
};
