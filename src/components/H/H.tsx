import React from 'react';
import {HProps} from './H.props';
import cn from 'classnames';
import styles from './H.module.scss';


export const H: React.FC<HProps> = ({children, className, size, ...props}): JSX.Element => {
  switch (size) {
    case 'h1':
      return <h1 className={cn(styles.h1, className)} {...props}>{children}</h1>;
    case 'h2':
      return <h2 className={cn(styles.h2, className)} {...props}>{children}</h2>;
    case 'h3':
      return <h3 className={cn(styles.h3, className)} {...props}>{children}</h3>;
    default:
      return <></>;
  }
};

