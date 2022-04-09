import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Layout} from './layout/Layout';
import {Main} from './pages/Main/Main';
import {Cart} from './pages/Cart/Cart';
import {getOrderSuccess, getProduct} from './redux/actions/ActionCreator';
import {useAppDispatch, useAppSelector} from './hooks/redux';
import {Delivery} from './pages/Delivery/Delivery';
import {Order} from './pages/Order/Order';

export const App: React.FC = (): JSX.Element => {
  const {product} = useAppSelector((state) => state.productReducer);
  const {orderSuccess, isLoading} = useAppSelector((state) => state.orderSuccessReducer);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getOrderSuccess());
  }, []);

  React.useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Main product={product}/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='delivery' element={<Delivery/>}/>
            <Route path='order' element={<Order order={orderSuccess} loading={isLoading}/>}/>
            <Route path='*' element={<Navigate to='/' replace/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
