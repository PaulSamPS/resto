import React from 'react';
import styles from './App.module.scss';
import {H} from './components/H/H';
import {Button} from './components/Button/Button';
import {P} from './components/P/P';
import {Search} from './layout/header/search/Search';
import {Card} from './components/Card/Card';
import {Span} from './components/Span/Span';
// import {ReactComponent as BuyIcon} from './buy.svg';
import {ReactComponent as MinusIcon} from './minus.svg';
import {ReactComponent as PlusIcon} from './plus.svg';

export const App = () => {
  return (
    <div className={styles.app}>
      <H size={'h3'}>tt</H>
      <Button>В корзину</Button>
      <P size={'l'}>что-то написано</P>
      <Search/>
      <Card className={styles.card}>
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
          <div className={styles.bottom}>
            {/* <Span size={'l'}>620 ₽</Span>*/}
            {/* <Button className={styles.btn}>*/}
            {/*  В корзину*/}
            {/*  <BuyIcon />*/}
            {/* </Button>*/}
            <Button>
              <MinusIcon />
            </Button>
            <Span size={'l'}>620 ₽</Span>
            <Button>
              <PlusIcon />
            </Button>
          </div>
        </div>
        <div className={styles.count}>
          3
        </div>
      </Card>
    </div>
  );
};
