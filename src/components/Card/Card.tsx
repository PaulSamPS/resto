import React from 'react';
import {CardProps} from './Card.props';
import {ReactComponent as BuyIcon} from './Icons/buy.svg';
import {ReactComponent as MinusIcon} from './Icons/minus.svg';
import {ReactComponent as PlusIcon} from './Icons/plus.svg';
import {Link} from 'react-router-dom';
import {Button, Flex, H3, P, Span, Img} from '../../styles/components';
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
  ${Flex}
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
  top: -12px;
  right: -12px;
  padding: 14px 20px;
  color: var(--textWhite);
  border-radius: 50%;
  background: var(--green);
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;

export const Card: React.FC<CardProps> = ({product}): JSX.Element => {
  const [addToCart, setAddToCart] = React.useState<boolean>(false);

  return (
    <Wrapper direction={'column'}>
      <Link to={`/${product.id}`}>
        <StyledImg height={227} width={327} src={product.image} alt={product.name}/>
      </Link>
      <Top align={'baseline'} justify={'space-between'}>
        <H3 size={20}>{product.name}</H3>
        <Span color={'#CFCFCF'} size={12} weight={400}>Вес: {product.weight} г</Span>
      </Top>
      <Description size={13}>{product.description}</Description>
      {addToCart ?
        <Bottom align={'center'} justify={'space-between'}>
          <ButtonAddToCart align={'center'}>
            <MinusIcon />
          </ButtonAddToCart>
          <Span size={20} weight={600}>{product.price} ₽</Span>
          <ButtonAddToCart align={'center'}>
            <PlusIcon />
          </ButtonAddToCart>
        </Bottom> :
        <Bottom align={'center'} justify={'space-between'}>
          <Span size={20} weight={600}>{product.price} ₽</Span>
          <ButtonAddToCart align={'center'} onClick={() => setAddToCart(true)}>
            В корзину
            <BuyIcon />
          </ButtonAddToCart>
        </Bottom>
      }
      <Count>3</Count>
    </Wrapper>
  );
};

