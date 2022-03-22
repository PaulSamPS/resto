import React from 'react';
import {Button, Flex, H1, H2, Img} from '../../styles/components';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {ProductInterface} from '../../interfaces/product.interface';
import {useNavigate} from 'react-router-dom';
import {CartCard} from '../../components/CartCard/CartCard';
import {PlaceOrder} from '../../components/PlaceOrder/PlaceOrder';
import {setActiveNav} from '../../redux/reducers/NavSlice';
import {Modal} from '../../components/Modal/Modal';
import {CardInfo} from '../../components/CardInfo/CardInfo';
import {getProduct} from '../../redux/actions/ActionCreator';
import {device} from '../../styles/breakpoints';
import {motion, AnimatePresence} from 'framer-motion';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  ${Flex};
  padding: 0 20px;
`;

const CartPage = styled.div``;

const Title = styled(H1)`
  margin: 16px 0 40px 115px;
  padding-left: 20px;
  border-left: 4px solid var(--green);
  
  @media screen and ${device.tablet} {
    margin-left: 0;
    font-size: 26px;
  }
`;

const CardBlock = styled.div`
  width: 1096px;
  margin: 0 auto;
  background: var(--brownGradient);
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);

  @media only screen and ${device.laptopL} {
    width: 900px;
  }

  @media only screen and ${device.laptop} {
    width: 700px;
  }

  @media only screen and ${device.tablet} {
    width: 385px;
  }

  @media only screen and ${device.mobileL} {
    width: 335px;
  }

  @media only screen and ${device.mobileM} {
    width: 275px;
  }
`;

const EmptyCart = styled(motion.div)`
  min-width: 458px;
  min-height: 358px;
  margin-top: 50px;
  padding: 20px;
  ${Flex};
  
  @media only screen and ${device.tablet} {
    min-width: 385px;
    min-height: 285px;
  }
`;

const StyledImg = styled(Img)`
  margin-bottom: 20px;
`;

const MenuBtn = styled(Button)`
  margin-top: 20px;
  padding: 17px 35px;
`;

export const Cart: React.FC = (): JSX.Element => {
  const [modal, setModal] = React.useState<boolean>(false);
  const {cart} = useAppSelector((state) => state.cartReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const variants = {
    show: {opacity: 1},
    hide: {opacity: 0},
  };

  const goToMenu = () => {
    dispatch(setActiveNav(0));
    dispatch(getProduct());
    navigate('/');
  };

  React.useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
      dispatch(setActiveNav(0));
    }
  }, []);

  return (
    <Wrapper
      direction={'column'}
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true}}
    >
      <AnimatePresence>
        {cart.length !== 0 ?
          <CartPage>
            <Title size={32}>Корзина</Title>
            <CardBlock>
              {cart.map((p: ProductInterface) => <CartCard key={p.id} product={p} setModal={setModal}/>)}
            </CardBlock>
            <PlaceOrder/>
          </CartPage> :
          <EmptyCart
            align={'center'}
            justify={'center'}
            direction={'column'}
            animate={cart.length !== 0 ? 'hide' : 'show'}
            variants={variants}
            initial={'hide'}
            exit={'show'}
            transition={{
              duration: 2
            }}
          >
            <StyledImg width={76} height={89} src={'assets/emptyCart.png'} alt='Корзина пуста'/>
            <H2 size={25}>Корзина пуста</H2>
            <MenuBtn onClick={goToMenu}>Посмотреть меню</MenuBtn>
          </EmptyCart>
        }
      </AnimatePresence>
      <Modal setModal={setModal} modal={modal}>
        <CardInfo count={cart}/>
      </Modal>
    </Wrapper>
  );
};

