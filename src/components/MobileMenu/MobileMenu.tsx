import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {Flex, Span, StyledA} from '../../styles/components';
import {NavInterface} from '../../interfaces/nav.interface';
import {ReactComponent as CloseIcon} from '../Modal/Icons/close.svg';
import {setActiveNav} from '../../redux/reducers/NavSlice';
import {getProduct} from '../../redux/actions/ActionCreator';
import {useNavigate} from 'react-router-dom';
import {ReactComponent as CallingIcon} from '../../layout/header/Contacts/icons/calling.svg';
import {MobileMenuProps} from './MobileMenu.props';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;

  opacity: 1;
  background: rgba(33, 31, 32, 0.7);
  backdrop-filter: blur(2px);
`;

const Container = styled.div`
  width: 320px;
  height: 100vh;
  background: var(--brownGradient);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
`;

const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  ${Flex};
  row-gap: 15px;
  
  svg {
    position: absolute;
    top: 15px;
    right: 15px;

    cursor: pointer;
    transition: all ease 0.2s;

    &:hover {
      transform: rotate(90deg);
    }
  }
`;

const MobileContacts = styled.div`
  ${Flex};
  gap: 10px;
  margin-bottom: 30px;
`;

const Icon = styled.div`
  ${Flex};
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: transform ease 0.2s;
  border-radius: 50%;
  background: var(--green);
  
  svg {
    position: unset;
  }
  
  &:hover {
    transform: scale(1.1);
  }
`;

const Phone = styled.div`
  ${Flex};
`;

const PhoneNumber = styled(Span)`
  line-height: 20px;
`;

const StyledLink = styled(StyledA)`
  
`;

export const MobileMenu: React.FC<MobileMenuProps> = ({setModalMenu}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {nav, activeIndex} = useAppSelector((state) => state.navReducer);

  const handleCloseModal = () => {
    setModalMenu(false);
  };

  const handleClick = (index: number, category: string) => {
    dispatch(setActiveNav(index));
    dispatch(getProduct(category));
    handleCloseModal();
    navigate('/');
  };

  return (
    <Overlay onClick={handleCloseModal}>
      <Container>
        <Wrapper direction={'column'}>
          <MobileContacts align={'center'}>
            <Icon align={'center'} justify={'center'}>
              <CallingIcon/>
            </Icon>
            <Phone direction={'column'}>
              <Span size={12} weight={400} color={'#CFCFCF'}>Контакты:</Span>
              <PhoneNumber size={14} weight={700}>+7 (912) 345-67-89</PhoneNumber>
            </Phone>
          </MobileContacts>
          {nav.map((m: NavInterface, index: number) =>
            <StyledLink
              onClick={() => handleClick(index, m.category)}
              key={m.id}
              size={16}
              linkColor={activeIndex === index ? '#618967' : '#FFFFFF'}
            >
              {m.name}
            </StyledLink>)}
          <CloseIcon onClick={handleCloseModal}/>
        </Wrapper>
      </Container>
    </Overlay>
  );
};
