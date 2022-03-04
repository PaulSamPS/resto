import React from 'react';
import cn from 'classnames';
import {ReactComponent as CloseIcon} from './close.svg';
import {ModalProps} from './Modal.props';
import styles from './Modal.module.scss';

export const Modal: React.FC<ModalProps> = ({children, className, modal, setModal, ...props}) => {
  return (
    <div className={cn(styles.overlay, className)} {...props} onClick={() => setModal(false)}>
      <div className={styles.modal} onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        <CloseIcon onClick={() => setModal(false)}/>
        {children}
      </div>
    </div>
  );
};

