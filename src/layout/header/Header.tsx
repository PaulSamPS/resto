import React from 'react';
import {Search} from './search/Search';
import {Contacts} from './Contacts/Contacts';
import {Button} from '../../components/Button/Button';
import {Span} from '../../components/Span/Span';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>LOGOS</h1>
      <Search/>
      <Contacts/>
      <Button className={styles.btn}>
        <Span size={'s'} className={styles.text}>Корзина</Span>
        <div className={styles.count}>
          <Span size={'s'}>1</Span>
        </div>
      </Button>
    </div>
  );
};

