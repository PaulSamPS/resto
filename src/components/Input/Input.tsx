import React from 'react';
import {InputTypes} from './Input.types';
import styles from './Input.module.scss';

export const Input: React.FC<InputTypes> = ({...props}): JSX.Element => {
  return (
    <input className={styles.input} {...props}/>
  );
};

