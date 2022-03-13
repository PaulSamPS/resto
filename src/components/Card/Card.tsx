import React from 'react';
import {CardProps} from './Card.props';
import {ReactComponent as BuyIcon} from './Icons/buy.svg';
import {ReactComponent as MinusIcon} from './Icons/minus.svg';
import {ReactComponent as PlusIcon} from './Icons/plus.svg';
import {useAppDispatch} from '../../hooks/redux';
import {Button, Flex, H3, Img, P, Span} from '../../styles/components';
import {getInfoProduct} from '../../redux/actions/ActionCreator';
import {setCart, minusItem} from '../../redux/reducers/CartSlice';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${Flex};
  position: relative;
  width: 327px;
  transition: all ease 0.2s;
  border-radius: 10px;
  background: var(--brownGradient);

  a {
    text-decoration: none;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.1);
  }
`;

const StyledImg = styled(Img)`
  cursor: pointer;
  border-radius: 10px 10px 0 0;
`;

const Top = styled.div`
  padding: 15px 20px 0;
  ${Flex}
`;

const ButtonAddToCart = styled(Button)`
  height: 44px;
  ${Flex};
  column-gap: 12px;
`;

const Description = styled(P)`
  margin-top: 10px;
  max-width: 250px;
  padding: 0 20px;
  flex-grow: 1;
`;

const Bottom = styled.div`
  padding: 0 20px 20px;
  margin-top: 15px;
  ${Flex}
`;

const Count = styled.div`
  position: absolute;
  ${Flex};
  top: -12px;
  right: -12px;
  height: 50px;
  width: 50px;
  color: var(--textWhite);
  border-radius: 50%;
  background: var(--green);
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;

export const Card: React.FC<CardProps> = ({product, count, setModal}) => {
  const dispatch = useAppDispatch();
  const itemCount = count.filter((item) => item.id === product.id);

  const handleItemInfo = (id: number) => {
    dispatch(getInfoProduct(id));
    setModal(true);
  };

  const addProductToCart = () => {
    dispatch(setCart(product));
  };

  const handleMinusItem = () => {
    dispatch(minusItem(product));
  };

  return (
    <Wrapper direction={'column'}>
      <StyledImg onClick={() => handleItemInfo(product.id)} height={227} width={327} src={product.image} alt={product.name}/>
      <Top align={'baseline'} justify={'space-between'}>
        <H3 size={20}>{product.name}</H3>
        <Span color={'#CFCFCF'} size={12} weight={400}>Вес: {product.weight} г</Span>
      </Top>
      <Description size={13}>{product.description}</Description>
      {itemCount && itemCount.length > 0 ?
        <Bottom align={'center'} justify={'space-between'}>
          <ButtonAddToCart align={'center'} onClick={handleMinusItem}>
            <MinusIcon />
          </ButtonAddToCart>
          <Span size={20} weight={600}>{product.price} ₽</Span>
          <ButtonAddToCart align={'center'} onClick={addProductToCart}>
            <PlusIcon />
          </ButtonAddToCart>
        </Bottom> :
        <Bottom align={'center'} justify={'space-between'}>
          <Span size={20} weight={600}>{product.price} ₽</Span>
          <ButtonAddToCart align={'center'} onClick={addProductToCart}>
            В корзину
            <BuyIcon />
          </ButtonAddToCart>
        </Bottom>
      }
      {itemCount && itemCount.map((i) =>
        <Count key={i.id} align={'center'} justify={'center'}>{i.qty}</Count>
      )}
    </Wrapper>
  );
};

