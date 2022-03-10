import React from 'react';
import {Search} from './Search/Search';
import {Contacts} from './Contacts/Contacts';
import {Modal} from '../../components/Modal/Modal';
import styles from './Header.module.scss';
import {Button, H2, Flex, Span, Img} from '../../styles/components';
import styled from 'styled-components';

const ButtonCart = styled(Button)`
  ${Flex};
  padding-right: 12px;
`;

const StyledSpan = styled(Span)`
  padding-right: 20px;
  border-right: 1px solid var(--textWhite);
`;

const Count = styled.div`
  ${Flex};
  width: 24px;
  height: 24px;
  margin-left: 12px;
  border-radius: 50%;
  background: var(--textWhite);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
`;

const StyledImg = styled(Img)`
  margin-bottom: 15px;
`;

const ModalButton = styled(Button)`
  margin-top: 43px;
  padding: 17px 35px;
`;

export const Header: React.FC = (): JSX.Element => {
  const [modal, setModal] = React.useState<boolean>(false);
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>LOGOS</h1>
      <Search/>
      <Contacts/>
      <ButtonCart align={'center'} onClick={() => setModal(true)}>
        <StyledSpan size={14} weight={600} className={styles.text}>Корзина</StyledSpan>
        <Count align={'center'} justify={'center'}>
          <Span size={12} weight={600} color={'#403C3B'}>1</Span>
        </Count>
      </ButtonCart>
      {modal &&
        <Modal setModal={setModal} modal={modal}>
          <StyledImg width={76} height={89} src={'assets/emptyCart.png'} alt='Корзина пуста'/>
          <H2 size={25}>Корзина пуста</H2>
          <ModalButton>Посмотреть меню</ModalButton>
        </Modal>
      }
    </div>
  );
};

