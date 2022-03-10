import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Layout} from './layout/Layout';
import {Main} from './pages/Main/Main';
import {Cart} from './pages/Cart/Cart';
import styled from 'styled-components';

const StyledApp = styled.div`
  min-height: 100vh;
`;

export const App: React.FC = (): JSX.Element => {
  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='*' element={<Navigate to='/' replace/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
};
