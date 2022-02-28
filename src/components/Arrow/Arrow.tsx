import React from 'react';
import {ReactComponent as ArrowLogo} from './Icons/arrow.svg';
import cn from 'classnames';
import {ArrowProps} from './Arrow.props';
import styles from './Arrow.module.scss';

export const Arrow: React.FC<ArrowProps> = ({className, appearance, ...props}): JSX.Element => {
  return (
    <button
      className={cn(styles.btn, className, {
        [styles.arrowRight]: appearance == 'right',
        [styles.arrowLeft]: appearance == 'left',
      })} {...props}>
      <ArrowLogo/>
    </button>
  );
};
