import React from 'react';
import styles from './Foooter.module.scss';
import {Link} from 'react-router-dom';

export const Footer: React.FC = (): JSX.Element => {
  return (
    <div className={styles.footer}>
      <Link to={'/'}>О ресторане</Link>
      <Link to={'/'}>Условия доставки</Link>
      <Link to={'/'}>Возврат товара</Link>
      <Link to={'/'}>Акции</Link>
    </div>
  );
};

