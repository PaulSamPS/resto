import React from 'react';
import styles from './P.module.scss';
import {PProps} from './P.props';
import cn from 'classnames';

export const P: React.FC<PProps> = ({children, size, className, ...props}) => {
  switch (size) {
    case 'l':
      return <p className={cn(styles.l, className)} {...props}>{ children }</p>;
    case 'm':
      return <p className={cn(styles.m, className)} {...props}>{ children }</p>;
    case 's':
      return <p className={cn(styles.s, className)} {...props}>{ children }</p>;
    default:
      return <></>;
  }
};
