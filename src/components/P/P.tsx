import React from 'react';
import styles from './P.module.scss';
import {PProps} from './P.props';
import cn from 'classnames';

export const P: React.FC<PProps> = ({children, size, className}) => {
  switch (size) {
    case 'l':
      return <p className={cn(styles.l, className)}>{ children }</p>;
    case 'm':
      return <p className={cn(styles.m, className)}>{ children }</p>;
    case 's':
      return <p className={cn(styles.s, className)}>{ children }</p>;
    default:
      return <></>;
  }
};
