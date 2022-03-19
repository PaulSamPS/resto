import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {Flex, H1, Span, StyledA} from '../../styles/components';
import {NavInterface} from '../../interfaces/nav.interface';
import {ReactComponent as CloseIcon} from '../Modal/Icons/close.svg';
import {setActiveNav} from '../../redux/reducers/NavSlice';
import {getProduct} from '../../redux/actions/ActionCreator';
import {useNavigate} from 'react-router-dom';
import {ReactComponent as CallingIcon} from '../../layout/header/Contacts/icons/calling.svg';
import {MobileMenuProps} from './MobileMenu.props';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  ${Flex};
  row-gap: 20px;
  min-height: 100vh;
  
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

const Logo = styled(H1)`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 20px;
`;

const MobileContacts = styled.div`
  ${Flex};
  gap: 10px;
  margin-top: auto;
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
    <Wrapper direction={'column'} onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
      <Logo size={25} color={'#FFFFFF'}>LOGOS</Logo>
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
      <MobileContacts align={'center'}>
        <Icon align={'center'} justify={'center'}>
          <CallingIcon/>
        </Icon>
        <Phone direction={'column'}>
          <Span size={12} weight={400} color={'#CFCFCF'}>Контакты:</Span>
          <PhoneNumber size={14} weight={700}>+7 (912) 345-67-89</PhoneNumber>
        </Phone>
      </MobileContacts>
    </Wrapper>
  );
};
