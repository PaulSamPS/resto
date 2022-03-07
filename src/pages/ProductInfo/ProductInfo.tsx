import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Nav} from '../../components/Nav/Nav';
import {CardInfo} from '../../components/CardInfo/CardInfo';
import {ReactComponent as ArrowIcon} from './Icons/arrow.svg';
import {Span} from '../../components/Span/Span';
import styles from './ProductInfo.module.scss';
import {Button} from '../../components/Button/Button';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {getInfoProduct, getProduct} from '../../redux/actions/ActionCreator';

export const ProductInfo = () => {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const productInfo = useAppSelector((state) => state.productInfoReducer.product);

  const navigate = useNavigate();

  console.log(productInfo);

  React.useEffect(() => {
    dispatch(getInfoProduct(id));
  }, [id]);

  React.useEffect(() => {
    dispatch(getProduct());
  }, [id]);

  return (
    <div className={styles.productInfo}>
      <Nav/>
      <Button className={styles.back} onClick={() => navigate('/')}>
        <div className={styles.icon}>
          <ArrowIcon/>
        </div>
        <Span size={'l'}>Вернуться назад</Span>
      </Button>
      <CardInfo product={productInfo}/>
    </div>
  );
};

