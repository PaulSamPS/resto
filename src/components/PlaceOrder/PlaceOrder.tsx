import React from 'react';
import {Flex, Span, Button} from '../../styles/components';
import {priceRu} from '../../helpers/priceRu';
import {PlaceOrderProps} from './PlaceOrder.props';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--brownGradient);
  width: 763px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 20px;
  margin-top: 80px;
  ${Flex};
`;

const Left = styled.div`

`;

const TotalSum = styled.div`
  ${Flex};
  column-gap: 10px;
`;

const Sum = styled(Span)`
  margin-bottom: 10px;
`;

export const PlaceOrder: React.FC<PlaceOrderProps> = ({totalPrice}): JSX.Element => {
  return (
    <Wrapper align={'center'} justify={'space-between'}>
      <Left>
        <TotalSum align={'baseline'}>
          <Span size={18} weight={500} color={'#A6A7AB'}>Итого: </Span>
          <Sum size={25} weight={700}>{priceRu(totalPrice)}</Sum>
        </TotalSum>
        <Span size={12}>Минимальная сума заказа 1500 ₽</Span>
      </Left>
      <Button>Оформить заказ</Button>
    </Wrapper>
  );
};
