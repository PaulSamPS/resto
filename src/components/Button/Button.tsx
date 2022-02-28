import React from 'react';
import {ButtonTypes} from './Button.types';
import styles from './Button.module.scss';
import cn from 'classnames';

export const Button: React.FC<ButtonTypes> = ({children, className, ...props}): JSX.Element => {
  return (
    <button className={cn(styles.btn, className)} {...props}>{children}</button>
  );
};
