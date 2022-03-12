import React from 'react';
import {Header} from './header/Header';
import {Footer} from './footer/Footer';
import {Outlet} from 'react-router-dom';
import {Nav} from '../components/Nav/Nav';

export const Layout: React.FC = (): JSX.Element => {
  return (
    <>
      <Header/>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  );
};
