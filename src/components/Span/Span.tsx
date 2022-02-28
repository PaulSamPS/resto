import React from 'react';
import cn from 'classnames';
import {SpanProps} from './Span.props';
import styles from './Span.module.scss';

export const Span: React.FC<SpanProps> = ({size, className, children, ...props}): JSX.Element => {
  switch (size) {
    case 'l':
      return <span className={cn(styles.l, className)} {...props}>{ children }</span>;
    case 'm':
      return <span className={cn(styles.m, className)} {...props}>{ children }</span>;
    case 's':
      return <span className={cn(styles.s, className)} {...props}>{ children }</span>;
    default:
      return <></>;
  }
};

