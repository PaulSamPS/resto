import React from 'react';
import {ButtonTypes} from './Button.types';
import styles from './Button.module.scss';
import cn from 'classnames';

export const Button: React.FC<ButtonTypes> = ({children, className}) => {
  return (
    <button className={cn(styles.btn, className)}>{children}</button>
  );
};
