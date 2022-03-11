import React from 'react';
import {ReactComponent as ShoppingBag} from './Icons/shoppingBag.svg';
import {Button, Flex, H3, Img, P, Span} from '../../styles/components';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {CardInfoProps} from './CardInfo.props';
import {ReactComponent as MinusIcon} from '../Card/Icons/minus.svg';
import {ReactComponent as PlusIcon} from '../Card/Icons/plus.svg';
import {cartSlice} from '../../redux/reducers/CartSlice';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${Flex};
`;

const Card = styled.div`
  ${Flex};
  width: 1210px;
  height: 400px;
  border-radius: 10px;
  background: var(--brownGradient);
`;

const StyledImg = styled(Img)`
  border-radius: 10px 0 0 10px;
`;

const InfoBlock = styled.div`
  ${Flex};
`;

const Title = styled(H3)`
  margin-top: 38px;
  margin-bottom: 5px;
  padding-left: 50px;
`;

const Description = styled(P)`
  max-width: 450px;
  margin-bottom: 90px;
  padding-left: 50px;
  font-size: 14px;
  line-height: 16px;
  flex-grow: 1;
`;

const Weight = styled(Span)`
  padding-left: 50px;
  font-weight: 400;
`;

const Buy = styled.div`
  max-width: 50%;
  ${Flex};
  margin-top: 20px;
  margin-bottom: 30px;
  padding-left: 50px;
  position: relative;
`;

const ButtonAddToCart = styled(Button)`
  ${Flex};
  padding: 16px 20px;
  
  svg {
    position: unset!important;
    transform: none!important;
  }
`;

const ButtonCount = styled(ButtonAddToCart)`
  width: 58px;
  height: 51px;
`;

const Count = styled.div`
  position: absolute;
  ${Flex};
  top: 0;
  right: -100px;
  height: 50px;
  width: 50px;
  color: var(--textWhite);
  border-radius: 50%;
  background: var(--green);
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;

const ButtonSpan = styled(Span)`
  padding-right: 20px;
  border-right: 1px solid var(--textWhite);
  margin-right: 15px;
`;

const NutritionalValue = styled.div`
  width: 100%;
  margin-bottom: 25px;
`;

const Name = styled.div`
  display: grid;
  padding-right: 159px;
  padding-bottom: 5px;
  padding-left: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-weight: 300;
  grid-template-columns: 40px 41px 58px 34px 28px;
  column-gap: 50px;
`;

const Value = styled.div`
  display: grid;
  margin-top: 5px;
  padding-right: 159px;
  padding-left: 50px;
  grid-template-columns: 40px 41px 58px 34px 28px;
  column-gap: 50px;
`;

export const CardInfo: React.FC<CardInfoProps> = ({count}): JSX.Element => {
  const {product} = useAppSelector((state) => state.productInfoReducer);
  const itemCount = count.filter((item) => item.id === product.id);
  const dispatch = useAppDispatch();

  const addProductToCart = () => {
    dispatch(cartSlice.actions.setCart(product));
  };

  return (
    <Wrapper justify={'center'}>
      {product &&
        <Card>
          <StyledImg width={600} height={400} src={product.image} alt={product.name}/>
          <InfoBlock direction={'column'}>
            <Title size={25}>{product.name}</Title>
            <Description size={12}>{product.description}</Description>
            <Weight size={14}>Вес: {product.weight} г</Weight>
            <Buy align={'center'} justify={'space-between'}>
              {itemCount && itemCount.length > 0 ?
                <>
                  <ButtonCount align={'center'}>
                    <MinusIcon/>
                  </ButtonCount>
                  <H3 size={25}>{product.price} ₽</H3>
                  <ButtonCount align={'center'} onClick={addProductToCart}>
                    <PlusIcon/>
                  </ButtonCount>
                  {itemCount && itemCount.map((i) =>
                    <Count key={i.id} align={'center'} justify={'center'}>{i.qty}</Count>
                  )}
                </> :
                <>
                  <ButtonAddToCart align={'center'} onClick={addProductToCart}>
                    <ButtonSpan size={14} weight={600}>Корзина</ButtonSpan>
                    <ShoppingBag/>
                  </ButtonAddToCart>
                  <H3 size={25}>{product.price} ₽</H3>
                </>
              }
            </Buy>
            <NutritionalValue>
              <Name>
                {product.nutritionalValue?.map((v) =>
                  <Span size={12} weight={300} key={v.name}>{v.name}</Span>
                )}
              </Name>
              <Value>
                {product.nutritionalValue?.map((v) =>
                  <Span size={12} weight={500} key={v.value}>{v.value}</Span>
                )}
              </Value>
            </NutritionalValue>
          </InfoBlock>
        </Card>
      }
    </Wrapper>
  );
};

