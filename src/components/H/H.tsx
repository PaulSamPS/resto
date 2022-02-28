import React from 'react';
import styles from './H.module.scss';

export interface ISize {
    size: 'h1' | 'h2' | 'h3'
}

export const H: React.FC<ISize> = ({children, size, ...props}) => {
  switch (size) {
    case 'h1':
      return <h1 className={styles.h1} {...props}>{children}</h1>;
    case 'h2':
      return <h2 className={styles.h2} {...props}>{children}</h2>;
    case 'h3':
      return <h3 className={styles.h3} {...props}>{children}</h3>;
    default:
      return <></>;
  }
};

