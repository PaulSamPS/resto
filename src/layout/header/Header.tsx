import React from 'react';
import {Search} from './Search/Search';
import {Contacts} from './Contacts/Contacts';
import {Modal} from '../../components/Modal/Modal';
import {Button, H1, H2, Flex, Span, Img} from '../../styles/components';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {useNavigate} from 'react-router-dom';
import {setActiveNav} from '../../redux/reducers/NavSlice';
import {getProduct} from '../../redux/actions/ActionCreator';
import {ReactComponent as MobileMenuIcon} from './Icons/burger.svg';
import {ReactComponent as CartMobileIcon} from '../../components/Card/Icons/buy.svg';
import {device} from '../../styles/breakpoints';
import {MobileMenu} from '../../components/MobileMenu/MobileMenu';
import {motion} from 'framer-motion';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: grid;
  position: relative;
  padding: 24px 80px;
  grid-template-columns: auto 555px 1fr auto;
  align-items: center;
  @media only screen and ${device.laptopL} {
    grid-template-columns: auto 1fr auto auto;
  }
  @media only screen and ${device.laptop} {
    grid-template-columns: 64px 1fr auto;
    row-gap: 20px;
    grid-template-areas: 
        'burger logo button'
        'search search search';
    padding: 20px;
  }
`;

const StyledMobileMenuIcon = styled.div`
  display: none;
  @media only screen and ${device.laptop} {
    display: unset;
    grid-area: burger;
  }
`;

const Logo = styled(H1)`
  margin-right: 80px;
  letter-spacing: 5px;
  cursor: pointer;
  @media only screen and ${device.laptopL} {
    margin-right: 40px;
  }
  @media only screen and ${device.laptop} {
    margin-right: 0;
    grid-area: logo;
    justify-self: center;
  }
`;

const ButtonCart = styled(Button)`
  ${Flex};
  padding-right: 12px;

  @media only screen and ${device.laptopL} {
    padding: 8px 16px;
  }
  @media only screen and ${device.laptop} {
    display: none;
  }
`;

const ButtonCartMobile = styled(Button)`
  display: none;
  @media only screen and ${device.laptop} {
    ${Flex};
    height: 54px;
    width: 64px;
    padding: 0;

    svg {
      margin-bottom: 3px;
    }
  }
`;

const StyledSpan = styled(Span)`
  padding-right: 20px;
  border-right: 1px solid rgba(255, 255, 255, 0.3);

  @media only screen and ${device.laptopL} {
    font-size: 12px;
  }
  @media only screen and ${device.laptop} {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    border-right: unset;
    padding-right: 0;
    margin-top: 3px;
  }
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
  @media only screen and ${device.laptop} {
    margin-left: 0;
  }
`;

const StyledImg = styled(Img)`
  margin-bottom: 20px;
`;

const ModalButton = styled(Button)`
  margin-top: 20px;
  padding: 17px 35px;
`;

const StyledMotion = styled(motion.div)`
  width: 320px;
  height: 100vh;
  background: var(--brownGradient);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  ${Flex};
  opacity: 1;
  background: rgba(33, 31, 32, 0.7);
  backdrop-filter: blur(2px);
`;

export const Header: React.FC = (): JSX.Element => {
  const [modal, setModal] = React.useState<boolean>(false);
  const [modalMenu, setModalMenu] = React.useState<boolean>(false);
  const {totalCount, cart} = useAppSelector((state) => state.cartReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const variants = {
    open: {opacity: 1, x: 0},
    closed: {opacity: 0, x: '-100%'},
  };

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

  const handleOpenMenu = () => {
    setModalMenu(true);
  };

  return (
    <StyledHeader>
      <StyledMobileMenuIcon onClick={handleOpenMenu}><MobileMenuIcon/></StyledMobileMenuIcon>
      <Logo size={25} color={'#FFFFFF'} onClick={handleNavigate}>LOGOS</Logo>
      <Search/>
      <Contacts/>
      <ButtonCartMobile align={'center'} direction={'column'} justify={'center'} onClick={handleClick}>
        {cart.length <= 0 ?
          <CartMobileIcon/> :
          <Count align={'center'} justify={'center'}>
            <Span size={12} weight={600} color={'#403C3B'}>{totalCount}</Span>
          </Count>
        }
        <StyledSpan size={12} weight={600}>корзина</StyledSpan>
      </ButtonCartMobile>
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
      <Overlay onClick={() => setModalMenu(false)}
        animate={modalMenu ? 'open' : 'closed'}
        variants={variants}
        initial={'closed'}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}
      >
        <StyledMotion>
          <MobileMenu setModalMenu={setModalMenu}/>
        </StyledMotion>
      </Overlay>
    </StyledHeader>
  );
};
