import React from 'react';
import {Slider} from '../../components/Slider/Slider';
import {Nav} from '../../components/Nav/Nav';
import {ProductBlock} from '../../components/ProductBlock/ProductBlock';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {getProduct} from '../../redux/actions/ActionCreator';
import styles from './Main.module.scss';

export const Main: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {product} = useAppSelector((state) => state.productReducer);

  React.useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div className={styles.main}>
      <Slider/>
      <Nav/>
      <ProductBlock products={product}/>
    </div>
  );
};

