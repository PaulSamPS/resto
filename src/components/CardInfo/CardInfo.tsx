import React from 'react';
import {ReactComponent as ShoppingBag} from './Icons/shoppingBag.svg';
import {Button, Flex, H3, Img, P, Span} from '../../styles/components';
import styled from 'styled-components';
import {useAppSelector} from '../../hooks/redux';

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
  ${Flex};
  margin-top: 20px;
  margin-bottom: 30px;
  padding-left: 50px;
`;

const ButtonAddToCart = styled(Button)`
  ${Flex};
  margin-right: 25px;
  padding: 16px 20px;
  
  svg {
    position: unset!important;
    transform: none!important;
  }
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

export const CardInfo: React.FC = (): JSX.Element => {
  const {product} = useAppSelector((state) => state.productInfoReducer);

  return (
    <Wrapper justify={'center'}>
      {product &&
        <Card>
          <StyledImg width={600} height={400} src={product.image} alt={product.name}/>
          <InfoBlock direction={'column'}>
            <Title size={25}>{product.name}</Title>
            <Description size={12}>{product.description}</Description>
            <Weight size={14}>Вес: {product.weight} г</Weight>
            <Buy align={'center'}>
              <ButtonAddToCart align={'center'}>
                <ButtonSpan size={14} weight={600}>Корзина</ButtonSpan>
                <ShoppingBag/>
              </ButtonAddToCart>
              <H3 size={25}>{product.price} ₽</H3>
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

