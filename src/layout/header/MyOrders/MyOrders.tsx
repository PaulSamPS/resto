import React from 'react';
import {useAppSelector} from '../../../hooks/redux';
import {useNavigate} from 'react-router-dom';
import styles from './MyOrders.module.scss';

export const MyOrders: React.FC = (): JSX.Element => {
  const {orderSuccess} = useAppSelector((state) => state.orderSuccessReducer);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/order');
  };

  return (
    <div className={styles.wrapper}>
      {orderSuccess.length > 0 && <span onClick={handleNavigate}>Мои заказы</span>}
    </div>
  );
};
