import React from 'react';
import cn from 'classnames';
import {SpanProps} from './Span.props';
import styles from '../P/P.module.scss';

export const Span: React.FC<SpanProps> = ({size, className, children}) => {
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

