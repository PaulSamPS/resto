import React from 'react';
import {Button, Flex, H1, H2, Img} from '../../styles/components';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {ProductInterface} from '../../interfaces/product.interface';
import {useNavigate} from 'react-router-dom';
import {CartCard} from '../../components/CartCard/CartCard';
import {PlaceOrder} from '../../components/PlaceOrder/PlaceOrder';
import {cartSlice} from '../../redux/reducers/CartSlice';
import {navSlice} from '../../redux/reducers/NavSlice';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${Flex};
  min-height: calc(100vh - 223px - 275px);
`;

const Title = styled(H1)`
  margin-bottom: 40px;
  margin-left: 115px;
  padding-left: 20px;
  border-left: 4px solid var(--green);
`;

const CardBlock = styled.div`
  width: 1096px;
  margin: 0 auto;
  background: var(--brownGradient);
  border-radius: 10px;
`;

const EmptyCart = styled.div`
  min-width: 458px;
  min-height: 358px;
  padding: 20px;
  ${Flex};
`;

const StyledImg = styled(Img)`
  margin-bottom: 15px;
`;

const MenuBtn = styled(Button)`
  margin-top: 43px;
  padding: 17px 35px;
`;

export const Cart: React.FC = (): JSX.Element => {
  const {cart, totalPrice} = useAppSelector((state) => state.cartReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleMinusItem = (item: ProductInterface) => {
    dispatch(cartSlice.actions.minusItem(item));
  };

  const handleDeleteItem = (item: ProductInterface) => {
    dispatch(cartSlice.actions.deleteItem(item));
  };

  const goToMenu = () => {
    dispatch(navSlice.actions.setActiveNav(0));
    navigate('/');
  };

  React.useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
      dispatch(navSlice.actions.setActiveNav(0));
    }
  }, []);

  return (
    <Wrapper direction={'column'}>
      {cart.length !== 0 ?
        <>
          <Title size={32}>Корзина</Title>
          <CardBlock>
            {cart.map((p: ProductInterface) => <CartCard key={p.id} product={p} handleMinusItem={handleMinusItem} deleteItem={handleDeleteItem}/>)}
          </CardBlock>
          <PlaceOrder totalPrice={totalPrice}/>
        </> :
          <EmptyCart align={'center'} justify={'center'} direction={'column'}>
            <StyledImg width={76} height={89} src={'assets/emptyCart.png'} alt='Корзина пуста'/>
            <H2 size={25}>Корзина пуста</H2>
            <MenuBtn onClick={goToMenu}>Посмотреть меню</MenuBtn>
          </EmptyCart>
      }
    </Wrapper>
  );
};

