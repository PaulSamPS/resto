import React from 'react';
import {Flex, H2, Img, P, Span} from '../../styles/components';
import {ReactComponent as MinusIcon} from '../Card/Icons/minus.svg';
import {ReactComponent as PlusIcon} from '../Card/Icons/plus.svg';
import {priceRu} from '../../helpers/priceRu';
import {ReactComponent as DeleteIcon} from './Icons/delete.svg';
import {CartCardProps} from './CartCard.props';
import {deleteItem, minusItem, setCart} from '../../redux/reducers/CartSlice';
import {useAppDispatch} from '../../hooks/redux';
import styled from 'styled-components';
import {getInfoProduct} from '../../redux/actions/ActionCreator';

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
  cursor: pointer;
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

const CountDisable = styled.div<{bg?: string}>`
  background: ${({bg = 'var(--green)'}) => bg};
`;

const Count = styled(CountDisable)`
  ${Flex};
  height: 38px;
  width: 38px;
  border-radius: 50%;
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

export const CartCard: React.FC<CartCardProps> = ({product, setModal}): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleItemInfo = () => {
    dispatch(getInfoProduct(product.id));
    setModal(true);
  };

  const addProductToCart = () => {
    dispatch(setCart(product));
  };

  const handleMinusItem = () => {
    dispatch(minusItem(product));
  };

  const handleDeleteItem = () => {
    dispatch(deleteItem(product));
  };

  return (
    <Wrapper>
      <StyledImg width={117} height={86} src={product.image} alt={product.name} onClick={handleItemInfo}/>
      <Info>
        <H2 size={18}>{product.name}</H2>
        <P size={12} color={'#A6A7AB'}>{product.description}</P>
      </Info>
      <CountBlock align={'center'} justify={'space-between'}>
        <Count
          align={'center'}
          justify={'center'}
          onClick={handleMinusItem}
          bg={product.qty <= 1 ? 'var(--brown)' : 'var(--green)'}
        >
          <MinusIcon/>
        </Count>
        <StyledSpanCount size={20} weight={700}>{product.qty}</StyledSpanCount>
        <Count align={'center'} justify={'center'} onClick={addProductToCart}><PlusIcon/></Count>
      </CountBlock>
      <TotalPrice size={20}>{priceRu(product.price * product.qty)}</TotalPrice>
      <Delete align={'center'} justify={'center'} onClick={handleDeleteItem}><DeleteIcon/></Delete>
    </Wrapper>
  );
};
