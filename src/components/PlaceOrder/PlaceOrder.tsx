import React from 'react';
import {Flex, Span, Button} from '../../styles/components';
import {priceRu} from '../../helpers/priceRu';
import {PlaceOrderProps} from './PlaceOrder.props';
import {useAppSelector} from '../../hooks/redux';
import {device} from '../../styles/breakpoints';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  background: var(--brownGradient);
  width: 763px;
  margin: 80px auto 80px;
  border-radius: 10px;
  padding: 20px;
  ${Flex};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
  min-height: 130px;

  @media only screen and ${device.laptop} {
    width: 563px;
  }

  @media only screen and ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr;
    width: 385px;
  }

  @media only screen and ${device.mobileL} {
    width: 335px;
  }
`;

const Left = styled.div`

`;

const TotalSum = styled.div`
  ${Flex};
  column-gap: 10px;
`;

const Sum = styled(Span)`
  margin-bottom: 15px;
`;

const MinSum = styled.div`
  ${Flex};

  @media only screen and ${device.tablet} {
    margin-bottom: 40px;
  }
`;

const MinOrder = styled(Span)`
  position: absolute;
  bottom: 20px;
  left: 20px;

  @media only screen and ${device.tablet} {
    bottom: 80px;
  }
`;

const StyledSpan = styled(Span)`
  margin-top: 15px;
`;

const StyledBtn = styled(Button)`
  @media only screen and ${device.tablet} {
    width: 175px;
    height: 41px;
    justify-self: center;
  }
`;

export const PlaceOrder: React.FC<PlaceOrderProps> = (): JSX.Element => {
  const {totalPrice} = useAppSelector((state) => state.cartReducer);
  const navigate = useNavigate();

  return (
    <Wrapper align={'center'} justify={'space-between'}>
      <Left>
        <TotalSum align={'baseline'}>
          <Span size={18} weight={500} color={'#A6A7AB'}>Итого: </Span>
          <Sum size={25} weight={700}>{priceRu(totalPrice)}</Sum>
        </TotalSum>
        <MinSum direction={'column'}>
          <Span size={12}>Минимальная сума заказа 1500 ₽</Span>
          {totalPrice < 1500 &&
            <MinOrder size={12}>
              До минимального заказа не хватает:
              <StyledSpan color={'#618967'} size={12}> {priceRu(1500 - totalPrice)}</StyledSpan>
            </MinOrder>
          }
        </MinSum>
      </Left>
      <StyledBtn onClick={() => navigate('/delivery')}>Оформить заказ</StyledBtn>
    </Wrapper>
  );
};
