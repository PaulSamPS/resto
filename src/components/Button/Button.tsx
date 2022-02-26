import React from "react";
import {ButtonTypes} from "./Button.types";
import styles from './Button.module.scss'

export const Button: React.FC<ButtonTypes> = ({children}) => {
    return (
        <button className={styles.btn}>{children}</button>
    );
};
