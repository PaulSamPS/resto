import React from 'react';
import {H} from '../H/H';
import {P} from '../P/P';
import {Span} from '../Span/Span';
import {Button} from '../Button/Button';
import {ReactComponent as ShoppingBag} from '../../pages/ProductInfo/Icons/shopping-bag.svg';
import {CardInfoProps} from './CardInfo.props';
import styles from './CardInfo.module.scss';

export const CardInfo: React.FC<CardInfoProps> = ({product, className, ...props}) => {
  return (
    <div className={styles.cardWrapper}>
      {product &&
        <div className={styles.card}>
          <img src={product.image} alt={product.name}/>
          <div className={styles.characteristics}>
            <H size={'h3'} className={styles.title}>{product.name}</H>
            <P size={'m'}>{product.description}</P>
            <Span size={'m'} className={styles.weight}>Вес: {product.weight} г</Span>
            <div className={styles.addToCart}>
              <Button>
                <Span size={'m'}>Корзина</Span>
                <ShoppingBag/>
              </Button>
              <H size={'h3'}>{product.price} ₽</H>
            </div>
            <div className={styles.nutritionalValue}>
              <div className={styles.name}>
                {product.nutritionalValue.map((v) =>
                  <Span key={v.name} size={'s'}>{v.name}</Span>
                )}
              </div>
              <div className={styles.value}>
                {product.nutritionalValue.map((v) =>
                  <Span key={v.id} size={'s'}>{v.value}</Span>
                )}
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

