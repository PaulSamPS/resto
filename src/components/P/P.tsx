import React from 'react';
import styles from "./P.module.scss";

interface IP {
    size: 'l' | 'm' | 's'
}

export const P: React.FC<IP> = ({children,size}) => {
    switch (size) {
        case 'l':
            return <p className={styles.l}>{ children }</p>
        case 'm':
            return <p className={styles.m}>{ children }</p>
        case 's':
            return <p className={styles.s}>{ children }</p>
        default:
            return <></>
    }
};