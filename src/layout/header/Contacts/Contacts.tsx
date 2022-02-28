import React from 'react';
import {ReactComponent as CallingIcon} from './icons/calling.svg';
import {Span} from '../../../components/Span/Span';
import styles from './Contacts.module.scss';

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.icon}>
        <CallingIcon/>
      </div>
      <div className={styles.phone}>
        <Span size={'m'}>Контакты:</Span>
        <Span size={'l'} className={styles.number}>+7 (912) 345-67-89</Span>
      </div>
    </div>
  );
};
