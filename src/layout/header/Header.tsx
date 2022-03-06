import React from 'react';
import {Search} from './Search/Search';
import {Contacts} from './Contacts/Contacts';
import {Button} from '../../components/Button/Button';
import {Span} from '../../components/Span/Span';
import {Modal} from '../../components/Modal/Modal';
import {H} from '../../components/H/H';
import {ReactComponent as EmptyCartIcon} from './icons/emptyCart.svg';
import styles from './Header.module.scss';

export const Header: React.FC = (): JSX.Element => {
  const [modal, setModal] = React.useState<boolean>(false);
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>LOGOS</h1>
      <Search/>
      <Contacts/>
      <Button className={styles.btn} onClick={() => setModal(true)}>
        <Span size={'s'} className={styles.text}>Корзина</Span>
        <div className={styles.count}>
          <Span size={'s'}>1</Span>
        </div>
      </Button>
      {modal &&
        <Modal setModal={setModal} modal={modal} className={styles.modal}>
          <EmptyCartIcon className={styles.icon}/>
          <H size={'h2'}>Корзина пуста</H>
          <Button>Посмотреть меню</Button>
        </Modal>
      }
    </div>
  );
};

