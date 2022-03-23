import React from 'react';
import {ReactComponent as ShoppingBag} from './Icons/shoppingBag.svg';
import {Button, Flex, H3, Img, P, Span} from '../../styles/components';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {CardInfoProps} from './CardInfo.props';
import {ReactComponent as MinusIcon} from '../Card/Icons/minus.svg';
import {ReactComponent as PlusIcon} from '../Card/Icons/plus.svg';
import {setCart, minusItem} from '../../redux/reducers/CartSlice';
import {Spinner} from '../Spinner/Spinner';
import {device} from '../../styles/breakpoints';
import {AnimatePresence, motion} from 'framer-motion';
import styled from 'styled-components';

const Card = styled.div`
  ${Flex};
  text-align: start;

  @media only screen and ${device.laptopL} {
    width: 900px;
    height: 350px;
  }

  @media only screen and ${device.laptop} {
    flex-direction: column;
    width: 450px;
    height: auto;
  }

  @media only screen and ${device.tablet} {
    width: 345px;
  }

  @media only screen and ${device.mobileL} {
    width: 295px;
  }

  @media only screen and ${device.mobileM} {
    width: 240px;
  }
`;

const StyledImg = styled(Img)`
  border-radius: 10px 0 0 10px;
  object-fit: cover;

  @media only screen and ${device.laptopL} {
    width: 450px;
    height: 350px;
  }

  @media only screen and ${device.laptop} {
    height: 100%;
    width: 100%;
    margin-top: 40px;
    border-radius: 10px;
  }

  @media only screen and ${device.tablet} {
    height: 200px;
  }
`;

const InfoBlock = styled.div`
  ${Flex};

  @media only screen and ${device.laptop} {
   
`;

const Title = styled(H3)`
  margin-top: 38px;
  margin-bottom: 10px;
  padding-left: 50px;

  @media only screen and ${device.laptopL} {
    margin-top: 18px;
  }

  @media only screen and ${device.laptop} {
    margin-top: 10px;
    padding-left: unset;
  }
`;

const Description = styled(P)`
  max-width: 450px;
  margin-bottom: 90px;
  padding-left: 50px;
  font-size: 14px;
  line-height: 16px;
  flex-grow: 1;

  @media only screen and ${device.laptopL} {
    max-width: 350px;
    margin-bottom: 75px;
  }

  @media only screen and ${device.laptop} {
    margin-bottom: 10px;
    padding-left: unset;
    max-width: 100%;
  }
`;

const Weight = styled(Span)`
  padding-left: 50px;
  font-weight: 400;

  @media only screen and ${device.laptop} {
    padding-left: unset;
  }
`;

const Buy = styled(motion.div)`
  max-width: 50%;
  ${Flex};
  margin-top: 20px;
  margin-bottom: 30px;
  padding-left: 50px;
  position: relative;

  @media only screen and ${device.laptop} {
    max-width: 60%;
    padding-left: unset;
  }

  @media only screen and ${device.tablet} {
    max-width: 80%;
  }

  @media only screen and ${device.mobileM} {
    max-width: 100%;
  }
`;

const BuyCount = styled(Buy)``;

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

const StyledPrice = styled(H3)``;

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
  
  @media only screen and ${device.tablet} {
    right: -70px;
  }

  @media only screen and ${device.mobileM} {
    right: -10px;
    top: -190px;
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
  text-align: center;

  @media only screen and ${device.laptop} {
    margin-bottom: 20px;
  }
  
  @media only screen and ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'name value';
  }
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

  @media only screen and ${device.laptop} {
    padding-left: 20px;
    padding-right: 0;
  }
  
  @media only screen and ${device.tablet} {
    grid-area: name;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    padding-right: 60px;
    border-bottom: unset;
    align-items: flex-start;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    row-gap: 10px;
  }
`;

const Value = styled.div`
  display: grid;
  margin-top: 5px;
  padding-right: 159px;
  padding-left: 50px;
  grid-template-columns: 40px 41px 58px 34px 28px;
  column-gap: 50px;

  @media only screen and ${device.laptop} {
    padding-left: 20px;
    padding-right: 0;
  }

  @media only screen and ${device.tablet} {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    grid-area: value;
    align-items: flex-end;
  }
`;

export const CardInfo: React.FC<CardInfoProps> = ({count}): JSX.Element => {
  const {product, isLoading} = useAppSelector((state) => state.productInfoReducer);
  const itemCount = count.filter((item) => item.id === product.id);
  const dispatch = useAppDispatch();

  const variants = {
    show: {opacity: 1},
    hide: {opacity: 0},
  };

  const addProductToCart = () => {
    dispatch(setCart(product));
  };

  const handleMinusItem = () => {
    dispatch(minusItem(product));
  };

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <>
      {product &&
        <Card>
          <StyledImg width={600} height={400} src={product.image} alt={product.name}/>
          <InfoBlock direction={'column'}>
            <Title size={25}>{product.name}</Title>
            <Description size={12}>{product.description}</Description>
            <Weight size={14}>Вес: {product.weight} г</Weight>
            <AnimatePresence>
              {itemCount && itemCount.length > 0 ?
                <BuyCount
                  align={'center'}
                  justify={'space-between'}
                  animate={itemCount && itemCount.length > 0 ? 'show' : 'hide'}
                  variants={variants}
                  initial={'hide'}
                  exit={'show'}
                  transition={{
                    duration: 1
                  }}
                >
                  <ButtonCount align={'center'} onClick={handleMinusItem}>
                    <MinusIcon/>
                  </ButtonCount>
                  <StyledPrice size={25}>{product.price} ₽</StyledPrice>
                  <ButtonCount align={'center'} onClick={addProductToCart}>
                    <PlusIcon/>
                  </ButtonCount>
                  {itemCount && itemCount.map((i) =>
                    <Count key={i.id} align={'center'} justify={'center'}>{i.qty}</Count>
                  )}
                </BuyCount> :
                <Buy
                  align={'center'}
                  justify={'space-between'}
                  animate={itemCount && itemCount.length > 0 ? 'hide' : 'show'}
                  variants={variants}
                  initial={'show'}
                  exit={'hide'}
                  transition={{
                    duration: 1
                  }}
                >
                  <ButtonAddToCart align={'center'} onClick={addProductToCart}>
                    <ButtonSpan size={14} weight={600}>Корзина</ButtonSpan>
                    <ShoppingBag/>
                  </ButtonAddToCart>
                  <StyledPrice size={25}>{product.price} ₽</StyledPrice>
                </Buy>
              }
            </AnimatePresence>
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
    </>
  );
};

