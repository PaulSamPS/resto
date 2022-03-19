import React from 'react';
import {Header} from './header/Header';
import {Footer} from './footer/Footer';
import {Outlet} from 'react-router-dom';
import {Nav} from '../components/Nav/Nav';
import {Flex} from '../styles/components';
import styled from 'styled-components';

const Container = styled.div`
  ${Flex};
  min-height: 100vh;
`;

export const Layout: React.FC = (): JSX.Element => {
  return (
    <Container direction={'column'}>
      <Header/>
      <Nav/>
      <Outlet/>
      <Footer/>
    </Container>
  );
};
