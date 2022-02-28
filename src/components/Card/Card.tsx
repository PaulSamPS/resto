import React from 'react';
import {CardTypes} from './Card.types';
import cn from 'classnames';
import {Span} from '../Span/Span';
import {Button} from '../Button/Button';
import {H} from '../H/H';
import {P} from '../P/P';
import {ReactComponent as BuyIcon} from './Icons/buy.svg';
import {ReactComponent as MinusIcon} from './Icons/minus.svg';
import {ReactComponent as PlusIcon} from './Icons/plus.svg';
import styles from './Card.module.scss';

export const Card: React.FC<CardTypes> = ({className}) => {
  const [addToCart, setAddToCart] = React.useState<boolean>(false);

  return (
    <div className={cn(styles.card, className)}>
      <img src='https://lamajo-pizza.ru/images/virtuemart/product/%D0%A9%D0%B5%D0%B4%D1%80%D1%8B%D0%B9%20%D1%8F%D0%B3%D0%BD%D0%B5%D0%BD%D0%BE%D0%BA%20%2001.jpg' alt="1"/>
      <div className={styles.info}>
        <div className={styles.title}>
          <H size={'h3'}>Ягненок</H>
          <P size={'m'}>Вес: 225 г</P>
        </div>
        <P className={styles.desc} size={'m'}>
          Фаршированный гречневой кашей,
          курагой, апельсином и зеленым яблоком
        </P>
        {addToCart ?
        <div className={styles.bottom}>
          <Button>
            <MinusIcon />
          </Button>
          <Span size={'l'}>620 ₽</Span>
          <Button>
            <PlusIcon />
          </Button>
        </div> :
        <div className={styles.bottom}>
          <Span size={'l'}>620 ₽</Span>
          <Button
            className={styles.btn}
            onClick={() => setAddToCart(true)}
          >
            В корзину
            <BuyIcon />
          </Button>
        </div>
        }
      </div>
      <div className={styles.count}>3</div>
    </div>
  );
};

