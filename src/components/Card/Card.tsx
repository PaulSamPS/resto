import React from 'react';
import styles from './Card.module.scss';
import {CardTypes} from './Card.types';
import cn from 'classnames';

export const Card: React.FC<CardTypes> = ({children, className}) => {
  return (
    <div className={cn(styles.card, className)}>
      {children}
    </div>
  );
};

