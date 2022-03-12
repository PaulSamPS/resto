import React from 'react';
import {Flex, H1} from '../../styles/components';
import {useAppSelector} from '../../hooks/redux';
import {ProductInterface} from '../../interfaces/product.interface';
import {useNavigate} from 'react-router-dom';
import {CartCard} from '../../components/CartCard/CartCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${Flex};
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

export const Cart: React.FC = (): JSX.Element => {
  const {cart} = useAppSelector((state) => state.cartReducer);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  }, []);

  return (
    <Wrapper direction={'column'}>
      <Title size={32}>Корзина</Title>
      <CardBlock>
        {cart.map((p: ProductInterface) => <CartCard key={p.id} product={p}/>)}
      </CardBlock>
    </Wrapper>
  );
};

