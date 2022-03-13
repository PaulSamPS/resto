import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Layout} from './layout/Layout';
import {Main} from './pages/Main/Main';
import {Cart} from './pages/Cart/Cart';
import {getProduct} from './redux/actions/ActionCreator';
import {useAppDispatch, useAppSelector} from './hooks/redux';

export const App: React.FC = (): JSX.Element => {
  const {product} = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main product={product}/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='*' element={<Navigate to='/' replace/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
