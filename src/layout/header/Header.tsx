import React from 'react';
import {Search} from './Search/Search';
import {Contacts} from './Contacts/Contacts';
import {Modal} from '../../components/Modal/Modal';
import {Button, H1, H2, Flex, Span, Img} from '../../styles/components';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {useNavigate} from 'react-router-dom';
import {setActiveNav} from '../../redux/reducers/NavSlice';
import {getProduct} from '../../redux/actions/ActionCreator';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: grid;

  padding: 24px 80px;
  grid-template-columns: auto 555px 1fr auto;
  align-items: center;
`;

const Logo = styled(H1)`
  margin-right: 80px;
  letter-spacing: 5px;
  cursor: pointer;
`;

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
  line-height: 0;
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
  const {totalCount} = useAppSelector((state) => state.cartReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (totalCount <= 0) {
      setModal(true);
    } else {
      navigate('cart');
    }
  };

  const handleNavigate = () => {
    dispatch(setActiveNav(0));
    dispatch(getProduct());
    navigate('/');
  };

  return (
    <StyledHeader>
      <Logo size={25} color={'#FFFFFF'} onClick={handleNavigate}>LOGOS</Logo>
      <Search/>
      <Contacts/>
      <ButtonCart align={'center'} onClick={handleClick}>
        <StyledSpan size={14} weight={600}>Корзина</StyledSpan>
        <Count align={'center'} justify={'center'}>
          <Span size={12} weight={600} color={'#403C3B'}>{totalCount}</Span>
        </Count>
      </ButtonCart>
      {modal &&
        <Modal setModal={setModal}>
          <StyledImg width={76} height={89} src={'assets/emptyCart.png'} alt='Корзина пуста'/>
          <H2 size={25}>Корзина пуста</H2>
          <ModalButton onClick={() => setModal(false)}>Посмотреть меню</ModalButton>
        </Modal>
      }
    </StyledHeader>
  );
};

