import React from 'react';
import {Flex, Span, Button} from '../../styles/components';
import {priceRu} from '../../helpers/priceRu';
import {PlaceOrderProps} from './PlaceOrder.props';
import {useAppSelector} from '../../hooks/redux';
import {device} from '../../styles/breakpoints';
import {useNavigate} from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';
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

  @media only screen and ${device.mobileM} {
    width: 275px;
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
  row-gap: 5px;

  @media only screen and ${device.tablet} {
    margin-bottom: 10px;
  }
`;

const MinOrder = styled(motion.span)`
  color: var(--textWhite);
  font-size: 12px;

  @media only screen and ${device.tablet} {
    bottom: 80px;
  }

  @media only screen and ${device.mobileM} {
    font-size: 11px;
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

  const variants = {
    show: {opacity: 1, height: 'auto'},
    hide: {opacity: 0, height: 0},
  };

  return (
    <Wrapper align={'center'} justify={'space-between'}>
      <Left>
        <TotalSum align={'baseline'}>
          <Span size={18} weight={500} color={'#A6A7AB'}>Итого: </Span>
          <Sum size={25} weight={700}>{priceRu(totalPrice)}</Sum>
        </TotalSum>
        <MinSum direction={'column'}>
          <Span size={12}>Минимальная сума заказа 1500 ₽</Span>
          <AnimatePresence>
            {totalPrice < 1500 &&
              <MinOrder
                animate={totalPrice < 1500 ? 'show' : 'hide'}
                variants={variants}
                initial={'hide'}
                exit={'hide'}
                transition={{
                  duration: .5
                }}
              >
                До минимального заказа не хватает:
                <StyledSpan color={'#618967'} size={12}> {priceRu(1500 - totalPrice)}</StyledSpan>
              </MinOrder>
            }
          </AnimatePresence>
        </MinSum>
      </Left>
      <StyledBtn onClick={() => navigate('/delivery')}>Оформить заказ</StyledBtn>
    </Wrapper>
  );
};
