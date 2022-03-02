import React from 'react';
import cn from 'classnames';
import styles from './Spinner.module.scss';
import {SpinnerTypes} from './Spinner.types';

export const Spinner: React.FC<SpinnerTypes> = ({className, ...props}): JSX.Element => {
  return (
    <div className={cn(styles.ldsDualRing, className)} {...props}></div>
  );
};
