import React from 'react';
import {Flex, H2, Img, P, Span} from '../../styles/components';
import {ReactComponent as MinusIcon} from '../Card/Icons/minus.svg';
import {ReactComponent as PlusIcon} from '../Card/Icons/plus.svg';
import {priceRu} from '../../helpers/priceRu';
import {ReactComponent as DeleteIcon} from './Icons/delete.svg';
import {CartCardProps} from './CartCard.props';
import {ProductInterface} from '../../interfaces/product.interface';
import {cartSlice} from '../../redux/reducers/CartSlice';
import {useAppDispatch} from '../../hooks/redux';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 117px 1fr auto 150px auto;
  column-gap: 40px;
  padding: 20px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const StyledImg = styled(Img)`
  border-radius: 10px
`;

const Info = styled.div`
  max-width: 265px;
  h2 {
    margin-bottom: 5px;
  }
`;

const CountBlock = styled.div`
  ${Flex};
`;

const StyledSpanCount = styled(Span)`
  width: 50px;
  text-align: center;
`;

const Count = styled.div`
  ${Flex};
  height: 38px;
  width: 38px;
  border-radius: 50%;
  background: var(--green);
  cursor: pointer;
  transition: transform ease 0.2s;
  
  &:active {
    transform: translateY(2px);
  }
  
  svg {
    height: 12px;
    width: 12px;
  }
`;

const TotalPrice = styled(H2)`
  text-align: center;
`;

const Delete = styled(Count)`
  margin-right: 20px;
  svg {
    height: 20px;
    width: 20px;
  }
`;

export const CartCard: React.FC<CartCardProps> = ({product}): JSX.Element => {
  const dispatch = useAppDispatch();

  const addProductToCart = (i: ProductInterface) => {
    dispatch(cartSlice.actions.setCart(i));
  };

  return (
    <Wrapper>
      <StyledImg width={117} height={86} src={product.image} alt={product.name}/>
      <Info>
        <H2 size={18}>{product.name}</H2>
        <P size={12} color={'#A6A7AB'}>{product.description}</P>
      </Info>
      <CountBlock align={'center'} justify={'space-between'}>
        <Count align={'center'} justify={'center'}><MinusIcon/></Count>
        <StyledSpanCount size={20} weight={700}>{product.qty}</StyledSpanCount>
        <Count align={'center'} justify={'center'} onClick={() => addProductToCart(product)}><PlusIcon/></Count>
      </CountBlock>
      <TotalPrice size={20}>{priceRu(product.price * product.qty)}</TotalPrice>
      <Delete align={'center'} justify={'center'}><DeleteIcon/></Delete>
    </Wrapper>

  );
};
